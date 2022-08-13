import {Component} from "react";
import {View, Picker} from "@tarojs/components";
import {connect} from "react-redux";
import {AtRate, AtList, AtListItem} from "taro-ui";
import './index.scss'
import Taro from "@tarojs/taro";
import TabBar from "../../tabBarPage";
import {
    changeSelector,
    findHospital,
    setHospitalDistance,
    setSelectIndex,
    sortHospitalDistance
} from "../../../actions/hospital";
import QQMapWX from "../../../libs/qqmap-wx-jssdk";

@connect(({hospital}) => ({hospital}), ({changeSelector, setSelectIndex, findHospital,setHospitalDistance,sortHospitalDistance}))
class Index extends Component {
    constructor() {
        super(...arguments)
    }

    next(value, e) {
        this.props.setSelectIndex(value);
        Taro.navigateTo({
            url: 'info/info'
        })
    }

    componentWillMount() {
        this.authorization()
            .then(res => {
                this.myLatitude = res.latitude * (Math.PI / 180);
                this.myLongitude = res.longitude * (Math.PI / 180);
                return new Promise(this.getLocation.bind(this));
            }).then(res => {
            this.props.setHospitalDistance(res);
        })
    }

    //选择器调用方法
    onChange = e => {
        this.props.changeSelector(this.props.hospital.selector[e.detail.value]);
        this.sort(e.detail.value);
    }

    getHospitalList() {
        this.props.findHospital();
    }

    qqmapsdk = new QQMapWX({
        key: '3LPBZ-GDPLD-ABA4V-P2ZM4-ZWABF-ATFSD' // 必填 填写刚刚在腾讯地图API平台申请的开发者密钥
    });
    address = '';
    myLatitude = 0;
    myLongitude = 0;

    getJingWeiDu = (resolve, reject) => {
        let lat = 0;
        let lng = 0;
        let _this = this;

        this.qqmapsdk.geocoder({
            //获取表单传入地址，该方法用于获取指定地址的经纬度
            address: this.address, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
            success: function (res) {//成功后的回调
                lat = res.result.location.lat * (Math.PI / 180);
                lng = res.result.location.lng * (Math.PI / 180);
                let d = Math.acos(Math.sin(lat) * Math.sin(_this.myLatitude) + Math.cos(lat) * Math.cos(_this.myLatitude) * Math.cos(lng - _this.myLongitude)) * 6371.004;
                console.log("定位", d);
                resolve(d);
            },
            fail: function (error) {
                console.error(error);
            }
        })
    }

    async authorization() {
        try {
            return await this.getWxLocation()//等待
        } catch (error) {
            console.log('获取权限失败，需要获取您的地理位置才能为您提供更好的服务，错误信息：', error);
        }
    }

    getWxLocation() {
        return new Promise((resolve, reject) => {
            let _locationChangeFn = (res) => {
                resolve(res);
                wx.offLocationChange(_locationChangeFn)
            }
            wx.startLocationUpdate({
                success: (res) => {
                    // console.log("startLocationUpdate:", res);
                    wx.onLocationChange(_locationChangeFn);
                },
                fail: (err) => {
                    console.log('获取当前位置失败', err)
                    wx.hideLoading()
                    reject(err)
                }
            })
        })
    }

    getLocation(resolve, reject) {
        let distance = [];
        let hospitalList = this.props.hospital.hospitalList;
        hospitalList.map((hospital, index) => {
            this.address = hospital.address;
            new Promise(this.getJingWeiDu)
                .then(res => {
                    distance[index] = res;
                    if (index === hospitalList.length - 1) {
                        resolve(distance);
                    }
                })
        })
    }

    sort(select) {
        /*
        select
        0:按距离升序
        1:按距离降序
        2:按评分升序
        3:按评分降序
         */
        let hospitalList = this.props.hospital.hospitalList;
        let hospitalDistances = this.props.hospital.hospitalDistances;
        let temp;

        switch (select) {
            case '0':
            case '1':
                this.props.sortHospitalDistance(hospitalList,hospitalDistances,select);
                break;
            case '2':
            case '3':
                hospitalList.map((num, index) => {
                        for (let i = 1; i < hospitalList.length - index; i++) {
                            if (select === '2' && hospitalList[i - 1].score > hospitalList[i].score || select === '3' && hospitalList[i - 1].score < hospitalList[i].score) {
                                temp = hospitalList[i - 1];
                                hospitalList[i - 1] = hospitalList[i];
                                hospitalList[i] = temp;
                            }
                        }
                    }
                )
        }
    }

    getHospitalData() {
        return this.props.hospital.hospitalList.map((info, index) => {
            return (
                <View onClick={this.next.bind(this, index)}>
                    <image src={info.image} className='listImg'/>
                    <text className='hospitalName'>
                        {info.name}
                    </text>
                    <AtRate
                        className='score'
                        size='15'
                        value={info.score}
                    />
                </View>
            )
        })
    }

    getHotHospital() {
        return this.props.hospital.hospitalList.map((info, index) => {
            if (info.isHot === 1) {
                return (
                    <View className='leftPart' onClick={this.next.bind(this, index)}>
                        <View className='leftH'>
                            <image src={info.image} alt="" className='leftImg'/>
                        </View>
                        <View className='leftMs'>
                            {info.name}
                        </View>
                        <AtRate
                            className='leftStar'
                            size='15'
                            value={info.score}
                        />
                    </View>
                    /*
                    <View className='rightPart' onClick={this.next.bind(this, index)}>
                        <View className='rightH'>
                            <image src={info.image} alt="" className='rightImg'/>
                        </View>
                        <View className='rightMs'>
                            {info.name}
                        </View>
                        <AtRate
                            className='rightStar'
                            size='15'
                            value={info.score}
                        />
                    </View>*/
                )
            }
        })
    }

    render() {
        let hospitalData;
        let hotHospital;
        if (this.props.hospital.hospitalList.length === 0) {
            this.getHospitalList();
        } else {
            hospitalData = this.getHospitalData();
            hotHospital = this.getHotHospital();
            return (
                <View className='index'>
                    <View className='header'>医院</View>
                    <View>
                        <View className='headDESC'>热门国医堂</View>
                        <View className='hotHospital'>
                            {hotHospital}
                        </View>
                        <View className='sort'>
                            <Picker className='picker' mode='selector' range={this.props.hospital.selector}
                                    onChange={this.onChange}>
                                <AtList>
                                    <AtListItem
                                        title='排序方法'
                                        extraText={this.props.hospital.selectorChecked}
                                    />
                                </AtList>
                            </Picker>
                        </View>
                        <View className='hospitalList'>
                            {hospitalData}
                        </View>
                    </View>
                    <TabBar tabBarCurrent={0}/>
                </View>
            );
        }
    }
}

export default Index
