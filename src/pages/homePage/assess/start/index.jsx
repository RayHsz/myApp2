import {Component} from "react";
import {Image, View} from "@tarojs/components";
import './index.scss'
import { AtIcon } from 'taro-ui'
import { AtButton } from 'taro-ui'
import Taro from "@tarojs/taro";
import {connect} from "react-redux";
import {findQuestion} from "../../../../actions/assess";

@connect(({assess}) => ({assess}), {findQuestion})
class index extends Component{

    constructor (props) {
        super(props)
    }

    goToAssessing=()=>{
        this.props.findQuestion()

        Taro.navigateTo({
            url: '../assessing/index'
        })
    }

    render() {
        return(
            <View className='index'>
                <View className='header'>
                    <text className='title'>
                        中医治未病&nbsp;&nbsp;&nbsp;
                        辩质识养生
                    </text>
                    <AtIcon className='icon' value='check' size='18' color='brown'></AtIcon>
                    <text className='text'>情志调摄</text>
                    <AtIcon className='icon2' value='check' size='18' color='brown'></AtIcon>
                    <text className='text2'>饮食调养</text>
                    <AtIcon className='icon3' value='check' size='18' color='brown'></AtIcon>
                    <text className='text3'>起居调摄</text>
                    <AtIcon className='icon4' value='check' size='18' color='brown'></AtIcon>
                    <text className='text4'>运动保健</text>
                    <AtIcon className='icon5' value='check' size='18' color='brown'></AtIcon>
                    <text className='text5'>穴位保健</text>
                </View>
                <View className='center'>
                    <View className='center-child'>
                        <text className='number'>18</text>
                        <text className='people'>人</text>
                        <text className='center-text'>已参与体质辨识评估</text>
                    </View>
                </View>
                <View className='article'>
                    <text className='article-text'>
                        中医体质辨识软件是判断中医体质分类的标准化工具，依据中华中医药学会《中医体质分类与判定》标准开发。软件是在中医体质理论指导下，根据量表设计原理，以问询录入的方式，采集居民健康信息;通过对9种体质分值的结果分析，来判断体质类型。
                    </text>
                </View>
                <AtButton className='button' size='normal' circle onClick={this.goToAssessing}>开始评估</AtButton>
                <View className='foot'>
                    <View className='content'>
                        <AtIcon className='foot-icon' value='alert-circle' size='18' color='brown'></AtIcon>
                        <View className='text-view'>
                                由于测评题目比较多，按照正常语速完成测评需要至少5分钟时间，请您合理安排体质辨析测评时间；
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default index