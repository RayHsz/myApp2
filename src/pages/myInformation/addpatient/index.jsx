import {Component} from "react";
import {View} from "@tarojs/components";
import {AtButton, AtIcon} from "taro-ui";
import './index.scss'
import { Picker } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import { AtInput }  from 'taro-ui'

import Taro from "@tarojs/taro";

class Index extends Component{

    constructor () {
        super(...arguments)
        this.state = {
            selector: ['居民身份证', '港澳台身份证', ],
            selectorChecked: '请选择类型>',
            selector1: ['男', '女', ],
            selectorChecked1: '请选择性别>',
            selector2: ['已婚', '未婚', ],
            selectorChecked2: '请选择婚姻>',
            selector3: ['本人', '父母','爱人','子女','其他' ],
            selectorChecked3: '请选择关系>',
            region: ['请选择省市区>'],
            value: '',
            value1:'',
            value2: '',
            value3: '',
            dateSel: '2018-04-22',

        }
    }
    // 保存
    save = () => {
        // 页面跳转
        Taro.navigateTo({
            url: '/pages/myInformation/preserve/index'
        })
    }
    // 身份证类型
    onChange = e => {
        this.setState({
            selectorChecked: this.state.selector[e.detail.value]
        })
    }
    // 性别
    onChange1 = e => {
        this.setState({
            selectorChecked1: this.state.selector1[e.detail.value]
        })
    }
    //省市区
    onChange2 = e => {
        this.setState({
            region: [e.detail.value]
        })
    }
    //婚姻
    onChange3 = e => {
        this.setState({
            selectorChecked2: this.state.selector2[e.detail.value]
        })
    }
    //关系
    onChange4 = e => {
        this.setState({
            selectorChecked3: this.state.selector3[e.detail.value]
        })
    }
    //身份证号码
    handleChange (value) {
        this.setState({
            value
        })
        // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
        return value
    }
    //姓名
    handleChange1 (value1) {
        this.setState({
            value1
        })
        // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
        return value1
    }
    //出生日期
    onDateChange = e => {
        this.setState({
            dateSel: e.detail.value
        })
    }
    // 详细地址
    handleChange2 (value2) {
        this.setState({
            value2
        })
        // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
        return value2
    }
    // 手机号码
    handleChange3 (value3) {
        this.setState({
            value3
        })
        // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
        return value3
    }
    //地址
    onClick (item) {
        console.log(item)
    }


    render() {
        return(
            <View>
            <View className='index'>
                {/*头部*/}
                <View className='head'>
                    <AtIcon value='edit' size='14px' color='blue'></AtIcon>
                    请进行实名登记
                </View>
                {/*身份证类型*/}
                <View>
                    <View className='idcard_type'>
                        <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                            <AtList>
                                <AtListItem
                                    title='身份证类型'
                                    extraText={this.state.selectorChecked}
                                />
                            </AtList>
                        </Picker>
                    </View>
                </View>
                {/*身份证*/}
                    <View className='idcard_number'>
                        <AtInput
                            name='value'
                            title='身份证'
                            type='idcard'
                            placeholder='请输入证件号码'
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                        />
                    </View>
                {/*姓名*/}
                    <View className='name'>
                        <AtInput
                            name='value1'
                            title='姓名'
                            type='text'
                            placeholder='请输入姓名'
                            value={this.state.value1}
                            onChange={this.handleChange1.bind(this)}
                        />
                    </View>
                {/*性别*/}
                    <View className='gender'>
                        <Picker mode='selector' range={this.state.selector1} onChange={this.onChange1}>
                            <AtList>
                                <AtListItem
                                    title='性别'
                                    extraText={this.state.selectorChecked1}
                                />
                            </AtList>
                        </Picker>
                    </View>
                    {/*出生日期*/}
                    <View className='birthday'>
                        <View>
                            <Picker mode='date' onChange={this.onDateChange}>
                                <AtList>
                                    <AtListItem title='出生日期' extraText={this.state.dateSel} />
                                </AtList>
                            </Picker>
                        </View>
                    </View>
                {/*地址*/}
                <View className="address">
                    <View>
                        <Picker mode="region" value="this.state.region" onChange={this.onChange2}>
                            <View className="picker">
                                <AtList>
                                    <AtListItem title='所居住的省市区' extraText={this.state.region}/>
                                </AtList>
                            </View>
                        </Picker>
                    </View>
                </View>
                {/*详细地址*/}
                <View className='detailed address'>
                    <AtInput
                        name='value2'
                        title='详细地址'
                        type='text'
                        placeholder='详细地址（乡镇，村、街道、小区、门牌号等）'
                        value={this.state.value2}
                        onChange={this.handleChange2.bind(this)}
                    />
                </View>
                {/*婚姻状况*/}
                <View className='married'>
                    <Picker mode='selector' range={this.state.selector2} onChange={this.onChange3}>
                        <AtList>
                            <AtListItem
                                title='婚姻状况'
                                extraText={this.state.selectorChecked2}
                            />
                        </AtList>
                    </Picker>
                </View>
            {/*    手机号码*/}
            <View className='phone_number'>
                <AtInput
                    name='value3'
                    border={false}
                    title='手机号码'
                    type='phone'
                    placeholder='手机号码'
                    value={this.state.value3}
                    onChange={this.handleChange3.bind(this)}
                />
            </View>
                {/*关系*/}
                <View className='relationship'>
                    <Picker mode='selector' range={this.state.selector3} onChange={this.onChange4}>
                        <AtList>
                            <AtListItem
                                title='关系'
                                extraText={this.state.selectorChecked3}
                            />
                        </AtList>
                    </Picker>
                </View>
                {/*默认就诊人*/}
                <View className='de_patient'>
                    设为默认就诊人
                </View>
            </View>
                {/*保存*/}
                <View className='preserve' onClick={this.save}>
                    <AtButton className='p_button' type='primary' circle size='normal' >保存</AtButton>
                </View>

            </View>
        )
    }
}
export default Index