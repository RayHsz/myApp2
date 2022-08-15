import {Component} from "react";
import {View} from "@tarojs/components";
import './step3.scss';
import {AtButton, AtRate, AtSteps} from 'taro-ui';
import {connect} from "react-redux";
import {onChangeCurrent, turnPrepare} from "../../../../actions/aiGuidance";
import Taro from "@tarojs/taro";
import {getRecommendedHospital, setSelectIndex} from "../../../../actions/hospital";


@connect(({aiGuidance,hospital}) => ({aiGuidance,hospital}), ({onChangeCurrent,turnPrepare,getRecommendedHospital,setSelectIndex}))
class step3 extends Component{

    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.getRecommendedHospital(this.props.aiGuidance.title)
    }

    next(value, e) {
        this.props.setSelectIndex(value);
        Taro.navigateTo({
            url: '../../hospital/info/info'
        })
    }

    goToIndex=()=>{
        this.props.turnPrepare()
        Taro.navigateBack({
            delta: 3
        })
    }

    goToStep1=()=>{
        this.props.turnPrepare()
        Taro.navigateBack({
            delta: 2
        })
    }

    render() {
        const items = [
            {
                title: '已完成',
                status: 'success'
            },
            {
                title: '已完成',
                status: 'success'
            },
            {
                title: '进行中',
            }
        ]
        return(
            <View className='index'>
                <View className='header'>
                    <text className='pageName'>智能导诊</text>
                </View>
                <View>
                    <AtSteps className='step'
                             items={items}
                             current={2}
                        // onChange={this.onChange.bind(this)}
                             activeColor='blue'
                    />
                </View>
                <View className='msg'>
                    <text className='text1'>附近医院：</text>
                </View>
                <View>
                    {
                        this.props.hospital.hospitalList.map((info, index) => {
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
                </View>
                <View className='button' onClick={this.goToStep1}>
                    <text className='text'>再来一次</text>
                </View>
                <View className='button' onClick={this.goToIndex}>
                    <text className='text'>完成</text>
                </View>
            </View>
        )
} }

export default step3