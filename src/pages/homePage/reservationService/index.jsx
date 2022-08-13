import {Component} from "react";
import {Image, View,ScrollView} from "@tarojs/components";
import {connect} from "react-redux";
import {findHospital,setSelectIndex,changeSelector} from '../../../actions/hospital'
import './index.scss'
import Taro from "@tarojs/taro";
import {AtSearchBar, AtAccordion, AtList, AtListItem, AtRate} from 'taro-ui'
import TabBar from "../../tabBarPage";






@connect(({hospital}) => ({hospital}), ({findHospital,setSelectIndex,changeSelector}))
class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            value: '',
            open:false,
            hosDisMap:new Map()
        }
    }
    /*获取医院列表*/
    getHospitalList() {
        this.props.findHospital();
    }

    /*搜索框事件*/
    SearchBar=(value)=>{
        this.setState({
            value: value
        })
    }

    /*筛选框事件*/
    handleClick=(value)=> {
        this.setState({
            open: value
        })
    }

    sFilter = (value) => {
        console.log(value);
        this.props.changeSelector(this.props.hospital.selector[value]);
        this.sort(value);
    }

    sort=(select)=>{
        /*
        0:按评分降序
        1:按评分升序
         */
        let a = this.props.hospital.hospitalList;
        let temp;
        switch (select){
            case '2':
                console.log('3123');
                a.map((num,index) => {
                    for (let i = 1 ; i < a.length-index ; i++){
                        if (a[i-1].score<a[i].score){
                            temp = a[i-1];
                            a[i-1] = a[i];
                            a[i] = temp;
                        }
                    }
                });
                break;
            case '3':
                a.map((num,index) => {
                    for (let i = 1 ; i < a.length-index ; i++){
                        if (a[i-1].score>a[i].score){
                            temp = a[i-1];
                            a[i-1] = a[i];
                            a[i] = temp;
                        }
                    }
                })
        }
    }

    /*医院信息跳转事件*/
    hospitalInformation=(value)=>{
        this.props.setSelectIndex(value);
        Taro.navigateTo({
            url: '/pages/homePage/hospital/info/info'
        })
    }

    render() {
        if (this.props.hospital.hospitalList.length === 0) {
            this.getHospitalList();
        } else {
            const hospitalData = this.props.hospital.hospitalList.map((info, index) => {
                    return (
                        <View className='hospital' onClick={this.hospitalInformation.bind(this, index)}>
                            <Image src={info.image} className='hospitalPhoto'/>
                            <View>
                                <text>{info.name}</text>
                            </View>
                            <AtRate value={info.score}/>
                            <View>
                                <text>剩余量:{info.remainder}</text>
                            </View>
                        </View>
                    )
                }
            )
            return (
                <View className='index'>
                    <AtSearchBar className='SearchBar' value={this.state.value} onChange={this.SearchBar.bind(this)}/>
                    <View className='filterBox'>
                        <View className='type'>
                            <text>医院:</text>
                        </View>
                        <View className='filter'>
                            <AtAccordion className='atAccordion'
                                         open={this.state.open}
                                         onClick={this.handleClick.bind(this)}
                                         title='筛选'
                            >
                                <AtList hasBorder={false} className='aList'>
                                    <AtListItem
                                        title='评分'
                                        arrow='right'
                                        thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                                        onClick={this.sFilter.bind(this, '2')}
                                    />
                                    <AtListItem
                                        title='剩余量'
                                        arrow='right'
                                        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                                    />
                                </AtList>
                            </AtAccordion>
                        </View>
                        <ScrollView className='hospitalList'>
                            {hospitalData}
                        </ScrollView>
                    </View>
                    <TabBar tabBarCurrent={0}/>
                </View>
            )
        }
    }
}

export default Index