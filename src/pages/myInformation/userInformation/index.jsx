import {Component} from "react";
import {Button,Input,Picker,View} from "@tarojs/components";
import {connect} from "react-redux";
import {AtAvatar, AtIcon, AtList, AtListItem} from "taro-ui";
import "./index.scss"
import TabBar from "../../tabBarPage";
import Taro from "@tarojs/taro";


@connect(({user}) => ({user}))
class HospitalList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            avatar:this.props.user.avatar,
            name:this.props.user.hospitalList[0].name,
            gender:this.props.user.hospitalList[0].gender,
            score1:"background-color:rgb(200,130,0);",
            score2:"background-color:rgb(255,255,255);",
            value: '',
            selector: ['居民身份证', '港澳台身份证'],
            selectorChecked: this.props.user.hospitalList[0].idcard_type,
            idcard_number:this.props.user.hospitalList[0].idcard_number,
            timeSel: '12:01',
            dateSel:this.props.user.hospitalList[0].birthday,
            phone_number:this.props.user.hospitalList[0].phone_number,
            openid2:this.props.user.openid
        }
    }

    onChange = e => {
        this.setState({
            selectorChecked: this.state.selector[e.detail.value]
        })
    }

    onChange1= e =>{
        this.setState({
            name: e.detail.value
        })

    }
    onChange2= e =>{
        this.setState({
            idcard_number: e.detail.value
        })
    }
    onChange3= e =>{
        this.setState({

            phone_number: e.detail.value
        })
    }

    onDateChange = e => {
        this.setState({
            dateSel: e.detail.value
        })

    }

    changeColor1 = e => {
        this.props.user.gender==1?
        this.setState({
            score1: "background-color:rgb(200,130,0);",
            score2: "background-color:rgb(255,255,255);",
            gender:1
        }):
        this.setState({
             score2: "background-color:rgb(200,130,0);",
             score1: "background-color:rgb(255,255,255);",
              gender:1
        })
        console.log("这里的openid"+this.state.openid2)
    }

    changeColor2 = e => {
        this.props.user.gender==0?
            this.setState({
                score1: "background-color:rgb(200,130,0);",
                score2: "background-color:rgb(255,255,255);",
                gender:0
            }):
            this.setState({
                score2: "background-color:rgb(200,130,0);",
                score1: "background-color:rgb(255,255,255);",
                gender:0
            })
        console.log("这里的openid"+this.state.openid2)
    }

    save=()=>{
        Taro.request({
            // url: 'https://www.fastmock.site/mock/4ea260afef1e26407be34bf87c61cdf7/login/loginIP', //仅为示例，并非真实的接口地址
            url: 'http://localhost:8090/userwx/savaAll', //仅为示例，并非真实的接口地址
            data: {
                id:this.props.user.openid,
                name:this.state.name,
                gender:this.state.gender,
                idcard_type:this.state.selectorChecked,
                idcard_number:this.state.idcard_number,
                birthday:this.state.dateSel,
                phone_number:this.state.phone_number
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                // 调reducer修改数据
                console.log("savaAll执行")

    }
        })

            Taro.reLaunch({
                url: "/pages/myInformation/mainInformation/index"
            });
    }

    render() {
        return (
            <View>
                {

                    this.props.user.hospitalList.map((user) => {
                        this.props.user.gender=user.gender
                        return (
                            <View className='index'>

                                <View className='backgroundPicture'>
                                    <View className='format'>
                                        <View className='word'>头像</View>
                                        <AtAvatar  size='100' circle image={this.state.avatar} className='headerPortrait'></AtAvatar>
                                    </View>
                                    <View className='format'>
                                        <View className='word'>姓名</View>
                                        <View className='name'>
                                            <Input type='text' placeholder='请输入姓名' size='5px' value={this.state.name} onInput={this.onChange1}/>
                                        </View>
                                    </View>

                                    {user.gender==1 ? <View  className='format' >
                                        <View className='word'>性别</View>
                                        <Button className='man'  style={this.state.score1} onClick={this.changeColor1}>
                                            <View className='manWord'>男</View>

                                        </Button>
                                        <Button className='woman' style={this.state.score2} onClick={this.changeColor2}>
                                            <View className='womanWord'>女</View>
                                        </Button>
                                    </View> :<View className='format' >
                                        <View className='word'>性别</View>
                                        <Button className='man'  style={this.state.score2} onClick={this.changeColor1}>
                                            <View className='manWord'>男</View>
                                        </Button>
                                        <Button className='woman' style={this.state.score1} onClick={this.changeColor2}>
                                            <View className='womanWord'>女</View>
                                        </Button>
                                    </View>}

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
                                            <Input type='number' placeholder='请输入证件号码' size='5px' value={this.state.idcard_number} onInput={this.onChange2}/>
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
                                            <Input type='number' placeholder='请输入手机号码' size='5px' value={this.state.phone_number} onInput={this.onChange3}/>
                                        </View>
                                    </View>
                                    <View>
                                        <Button className='save' onClick={this.save}>
                                            保存
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
                <TabBar tabBarCurrent={2} />
            </View>
        )
    }
}

export default HospitalList
