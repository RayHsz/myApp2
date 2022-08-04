import {Component} from "react";
import {View} from "@tarojs/components";
import './step2.scss';
import {AtButton, AtSteps} from 'taro-ui';
import { AtCheckbox } from 'taro-ui';
import {connect} from "react-redux";
import {onChangeCheckedList} from "../../../../actions/aiGuidance";

@connect(({aiGuidance}) => ({aiGuidance}), ({onChangeCheckedList}))
class Step2 extends Component{
    constructor (props) {
        super(props)
    }
    handleChange (value) {
        this.props.onChangeCheckedList(value)
    }
    render() {
        const items = [
            {
                title: '已完成',
                status: 'success'
            },
            {
                title: '进行中',
            },
            {
                title: '待进行',
            }
        ]
        this.checkboxOption = [{
            value: 'list1',
            label: '鼻塞',
        },{
            value: 'list2',
            label: '头疼'
        },{
            value: 'list3',
            label: '痰黄',
        },{
            value: 'list4',
            label: '气短',
        },{
            value: 'list5',
            label: '咳嗽',
        },{
            value: 'list6',
            label: '其他',
        }]
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
                <View className='chooseView'>
                    <text className='text1'>请选择不适症状</text>
                </View>
                <View>
                    <AtCheckbox
                        options={this.checkboxOption}
                        selectedList={this.props.aiGuidance.checkedList}
                        onChange={this.handleChange.bind(this)}
                    />
                </View>
                <AtButton className='next' type='primary' size='small' circle onClick={this.next}>下一步</AtButton>
            </View>
        )
    }
}
export default Step2