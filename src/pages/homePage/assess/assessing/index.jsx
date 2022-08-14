import {Component} from "react";
import {Image, ScrollView, View} from "@tarojs/components";
import './index.scss'
import {AtButton, AtIcon} from 'taro-ui'
import { AtTag } from 'taro-ui'
import {connect} from "react-redux";
import {onChangeActive} from "../../../../actions/assess";
import Taro from "@tarojs/taro";


@connect(({assess}) => ({assess}),{onChangeActive})
class index extends Component{

    constructor (props) {
        super(props)
    }

    changeActive(index,num){
        this.props.onChangeActive(index,num)
    }

    addResult=()=>{
            Taro.request({
                url: 'http://www.localhost:8090/assess/addResult', //仅为示例，并非真实的接口地址
                data:{
                    openid:'wyf'
                },
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success: function (res) {
                    console.log(res.data.msg);
                }
            })
    }

    goToResult=()=>{
        this.addResult()
        Taro.navigateTo({
            url: '../result/index'
        })
    }

    render() {
        const scrollStyle = {height: '450px'}
        const scrollTop = 0
        const Threshold = 300
        return(
            <View className='index'>
                <View className='header'>
                    <AtIcon className='icon' value='alert-circle' size='18' color='brown'></AtIcon>
                    <text className='title'>说明</text>
                    <text className='text'>
                        以下问题请根据您近一年的体验和感觉回答
                    </text>
                </View>
                <ScrollView
                    className='list'
                    scrollY
                    scrollWithAnimation
                    scrollTop={scrollTop}
                    style={scrollStyle}
                    lowerThreshold={Threshold}
                    upperThreshold={Threshold}
                >
                    {
                        this.props.assess.questionList.map((question, index) => {
                            return (
                                <View className='body' key={index}>
                                    <View className='question'>
                                        {question.name}
                                    </View>
                                    <AtTag className='tag1'
                                           type='primary'
                                           circle
                                           active={this.props.assess.active[index]==1}
                                           onClick={this.changeActive.bind(this,index,1)}
                                    >没有（根本不）</AtTag>
                                    <AtTag className='tag1'
                                           type='primary'
                                           circle
                                           active={this.props.assess.active[index]==2}
                                           onClick={this.changeActive.bind(this,index,2)}
                                    >很少（有一点）</AtTag>
                                    <AtTag className='tag2'
                                           type='primary'
                                           circle
                                           active={this.props.assess.active[index]==3}
                                           onClick={this.changeActive.bind(this,index,3)}
                                    >有时（有些）</AtTag>
                                    <AtTag className='tag2'
                                           type='primary'
                                           circle
                                           active={this.props.assess.active[index]==4}
                                           onClick={this.changeActive.bind(this,index,4)}
                                    >经常（相当）</AtTag>
                                    <AtTag className='tag3'
                                           type='primary'
                                           circle
                                           active={this.props.assess.active[index]==5}
                                           onClick={this.changeActive.bind(this,index,5)}
                                    >总是（非常）</AtTag>
                                </View>
                            )
                        })
                    }
                    <View className='foot'>
                        <AtButton className='button' size='normal' circle onClick={this.goToResult}>查看结果</AtButton>
                    </View>
                </ScrollView>

            </View>
        )
    }
}

export default index