import {Component} from "react";
import {View} from "@tarojs/components";
import './step3.scss';
import {AtButton, AtRate, AtSteps} from 'taro-ui';
import {connect} from "react-redux";
import {onChangeCurrent, turnPrepare} from "../../../../actions/aiGuidance";
import Taro from "@tarojs/taro";

@connect(({aiGuidance}) => ({aiGuidance}), ({onChangeCurrent,turnPrepare}))
class step3 extends Component{

    constructor(props) {
        super(props);
    }

    turnPrepare=()=>{

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
                    <image src='http://116.205.177.247:8080/images/yuxishequ.jpg' alt="" className='listImg' />
                    <text className='hospitalName'>
                        裕西社区国医堂
                    </text>
                    <AtRate
                        className='score'
                        size='15'
                        value='2'
                    />
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