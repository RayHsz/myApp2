import {Component} from "react";
import {View} from "@tarojs/components";
import './step3.scss';
import {AtButton, AtRate, AtSteps} from 'taro-ui';
import {connect} from "react-redux";
import {onChangeCheckedList, onChangeCurrent} from "../../../../actions/aiGuidance";

@connect(({aiGuidance}) => ({aiGuidance}), ({onChangeCurrent}))
class step3 extends Component{

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
                status: 'success'
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
                             current={this.props.aiGuidance.current}
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
                <View className='button'>
                    <text className='text'>再来一次</text>
                </View>
                <View className='button'>
                    <text className='text'>完成</text>
                </View>
            </View>
        )
} }

export default step3