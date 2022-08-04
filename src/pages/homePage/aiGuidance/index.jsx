import {Component} from "react";
import {View} from "@tarojs/components";
import './index.scss';
import { AtSteps } from 'taro-ui';
import { AtIcon } from 'taro-ui';
import { AtDivider } from 'taro-ui'
import { AtTag } from 'taro-ui'
import { Picker } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import { AtButton } from 'taro-ui'
import Taro from "@tarojs/taro";
import {connect} from "react-redux";
import {onChangeActive, onChangeCurrent, onChangeDate} from "../../../actions/aiGuidance";

@connect(({aiGuidance}) => ({aiGuidance}), ({onChangeActive,onChangeDate,onChangeCurrent}))
class Index extends Component {
    constructor (props) {
        super(props)
    }

    next=()=>{
        this.props.onChangeCurrent(1)
        Taro.navigateTo({
            url: 'step2/step2'
        })
    }
    onDateChange = e => {
        this.props.onChangeDate(e.detail.value)
    }

    render() {
        const items = [
            {
                title: '进行中',
            },
            {
                title: '待进行',
            },
            {
                title: '待进行',
            }
        ]
        return (
            <View className='index'>
                <View className='header'>
                    <text className='pageName'>智能导诊</text>
                </View>
                    <AtSteps className='step'
                        items={items}
                        current={this.props.aiGuidance.current}
                        // onChange={this.onChange.bind(this)}
                    />
                <View className='information'>
                    <AtIcon className='icon' value='user' size='20' color='black'></AtIcon>
                    <text className='nickname'>wyf</text>
                </View>
                <View className='sex'>
                    <text className='text'>性别</text>
                    <View className='tag'><AtTag type='primary' circle active={this.props.aiGuidance.active} onClick={this.props.onChangeActive}>男</AtTag></View>
                    <View className='tag2'><AtTag type='primary' circle active={!this.props.aiGuidance.active} onClick={this.props.onChangeActive}>女</AtTag></View>
                </View>
                <View className='bornDay'>
                    <View>
                        <Picker mode='date' onChange={this.onDateChange}>
                            <AtList>
                                <AtListItem title='出生日期' extraText={this.props.aiGuidance.dateSel} />
                            </AtList>
                        </Picker>
                    </View>
                </View>
                <AtButton className='next' type='primary' size='small' circle onClick={this.next}>下一步</AtButton>
            </View>
        )
    }
}

export default Index