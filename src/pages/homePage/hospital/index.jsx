import {Component} from "react";
import {View, Picker} from "@tarojs/components";
import {connect} from "react-redux";
import {AtRate, AtList, AtListItem} from "taro-ui";
import './index.scss'
import Taro from "@tarojs/taro";
import TabBar from "../../tabBarPage";
import {changeSelector, setSelectIndex} from "../../../actions/hospital";

@connect(({hospital}) => ({hospital}), ({changeSelector, setSelectIndex}))
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

    //选择器调用方法
    onChange = e => {
        this.props.changeSelector(this.props.hospital.selector[e.detail.value]);
        this.sort(e.detail.value);
    }

    sort(select) {
        /*
        select
        0:按距离升序
        1:按距离降序
        2:按评分升序
        3:按评分降序
         */
        let a = this.props.hospital.data;
        let b = [];
        a.map((num, index) => {
            b[index] = a[index].name;
        })
        let temp;
        switch (select) {
            case '0':
            case '1':
                b.sort(function (item1, item2) {
                    return item1.localeCompare(item2, 'zh-CN');
                })
                if (select === '1') {
                    b = b.reverse();
                }
                b.map((name, index1) => {
                    a.map((data, index2) => {
                        if (data.name === name && index2 !== index1) {
                            temp = a[index2];
                            a[index2] = a[index1];
                            a[index1] = temp;
                        }
                    })
                })
                break;
            case '2':
            case '3':
                a.map((num, index) => {
                        for (let i = 1; i < a.length - index; i++) {
                            if (select === '2' && a[i - 1].score > a[i].score || select === '3' && a[i - 1].score < a[i].score) {
                                temp = a[i - 1];
                                a[i - 1] = a[i];
                                a[i] = temp;
                            }
                        }
                    }
                )
        }
    }

    render() {
        const hospitalData = this.props.hospital.data.map((info, index) => {
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
        let num = [0, 0];
        const hotHospital = this.props.hospital.hotHospitalName.map((name, index) => {
            this.props.hospital.data.map((info, index1) => {
                if (info.name === name) {
                    num[index] = index1;
                }
            })
            return (
                index === 0 ?
                    <View className='leftPart' onClick={this.next.bind(this, num[0])}>
                        <View className='leftH'>
                            <image src={this.props.hospital.data[num[0]].image} alt="" className='leftImg'/>
                        </View>
                        <View className='leftMs'>
                            {this.props.hospital.data[num[0]].name}
                        </View>
                        <AtRate
                            className='leftStar'
                            size='15'
                            value={this.props.hospital.data[num[0]].score}
                        />
                    </View>
                    :
                    <View className='rightPart' onClick={this.next.bind(this, num[1])}>
                        <View className='rightH'>
                            <image src={this.props.hospital.data[num[1]].image} alt="" className='rightImg'/>
                        </View>
                        <View className='rightMs'>
                            {this.props.hospital.data[num[1]].name}
                        </View>
                        <AtRate
                            className='rightStar'
                            size='15'
                            value={this.props.hospital.data[num[1]].score}
                        />
                    </View>
            )
        })
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

export default Index
