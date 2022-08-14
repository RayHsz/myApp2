import {Component} from "react";
import {View} from "@tarojs/components";
import './step2.scss';
import {AtButton, AtSteps} from 'taro-ui';
import { AtCheckbox } from 'taro-ui';
import {connect} from "react-redux";
import {onChangeCheckedList, onChangeCurrent} from "../../../../actions/aiGuidance";
import Taro from "@tarojs/taro";

@connect(({aiGuidance}) => ({aiGuidance}), ({onChangeCheckedList,onChangeCurrent}))
class Step2 extends Component{
    constructor (props) {
        super(props)
    }
    handleChange (value) {
        let string=''
        value.map((item, index)=>{
            this.checkboxOption.map((label,i)=>{
                if(item==label.value){
                    if(string!=''){
                        string+='，'+label.label
                    }else {
                        string+=label.label
                    }
                }
            })
        })
        if(string==''){
            string='请选择不适症状'
        }
        this.props.onChangeCheckedList(value,string)
    }

    next=()=>{
        Taro.navigateTo({
            url: '../step3/step3'
        })
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
        }]
        return(
            <View className='index'>
                <View className='header'>
                    <text className='pageName'>智能导诊</text>
                </View>
                <View>
                    <AtSteps className='step'
                             items={items}
                             current={1}
                             // onChange={this.onChange.bind(this)}
                             activeColor='blue'
                    />
                </View>
                <View className='chooseView'>
                    <text className='text1'>{this.props.aiGuidance.title}</text>
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