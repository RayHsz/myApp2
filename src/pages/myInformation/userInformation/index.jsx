import { Component } from 'react'
import { connect } from 'react-redux'
import {View, Button, Text, Input} from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { add, minus, asyncAdd } from '../../../actions/counter'
import './index.scss'
import {AtAvatar, AtIcon} from "taro-ui";
import { Picker } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import TabBar from "../../tabBarPage";
class Index extends Component {

    state = {
        selector: ['居民身份证', '港澳台身份证'],
        selectorChecked: '居民身份证',
        timeSel: '12:01',
        dateSel: '2018-04-22',
    }
    onChange = e => {
        this.setState({
            selectorChecked: this.state.selector[e.detail.value]
        })
    }
    onDateChange = e => {
        this.setState({
            dateSel: e.detail.value
        })
    }

    render () {
        return (
            <View className='index'>
                <View className='backgroundPicture'>
                    <View className='format'>
                        <View className='word'>头像</View>
                        <AtAvatar  size='100' circle image='' className='headerPortrait'></AtAvatar>
                    </View>
                    <View className='format'>
                        <View className='word'>姓名</View>
                        <View className='name'>
                            <Input type='text' placeholder='请输入姓名' size='5px' />
                        </View>
                    </View>
                    <View className='format'>
                        <View className='word'>性别</View>
                        <Button className='man' >
                            <View className='manWord'>男</View>
                        </Button>
                        <Button className='woman' >
                            <View className='womanWord'>女</View>
                        </Button>
                    </View>
                    <View className='format'>
                        <View className='word'>身份证类型</View>
                        <View className='card'>
                            <View className='page-section'>
                                <View>
                                    <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                                        <AtList>
                                            <AtListItem
                                                extraText={this.state.selectorChecked}
                                            />
                                            <AtIcon value='chevron-right' size='30' color='rgb(172,172,172)' className='blackArrow' ></AtIcon>
                                        </AtList>
                                    </Picker>
                                </View>
                            </View>

                        </View>

                    </View>
                    <View className='format'>
                        <View className='word'>证件号码</View>
                        <View className='IDin'>
                            <Input type='number' placeholder='请输入证件号码' size='5px' />
                        </View>
                    </View>
                    <View className='format'>
                        <View className='word'>出生日期</View>
                        <View className='birthday'>
                            <View className='page-section'>
                                <View>
                                    <Picker mode='date' onChange={this.onDateChange}>
                                        <AtList>
                                            <AtListItem  extraText={this.state.dateSel} />
                                        </AtList>
                                        <AtIcon value='chevron-right' size='30' color='rgb(172,172,172)' className='blackArrow' ></AtIcon>
                                    </Picker>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className='format'>
                        <View className='word'>手机号码</View>
                        <View className='phoneIn'>
                            <Input type='number' placeholder='请输入手机号码' size='5px' />
                        </View>
                    </View>
                    <View>
                        <Button className='save'>
                            保存
                        </Button>
                    </View>
                </View>
                <TabBar tabBarCurrent={2} />
            </View>
        )
    }
}

export default Index

