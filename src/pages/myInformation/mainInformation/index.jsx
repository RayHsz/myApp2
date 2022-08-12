import {Component} from "react";
import {Button, View} from "@tarojs/components";
import {AtButton, AtModal, AtModalAction, AtModalContent, AtModalHeader} from "taro-ui";
import {connect} from "react-redux";
import {findHospital} from "../../../actions/hospital";
import Taro from "@tarojs/taro";
import './index.scss'
import { AtAvatar } from 'taro-ui'
import { AtIcon } from 'taro-ui'
import TabBar from "../../tabBarPage";



@connect(({hospital}) => ({hospital}),{findHospital})
class Index extends Component {
  constructor(props) {
    super(props);
      this.state = {
          code:"",
          openid:"",
          avatar:this.props.hospital.avatar,
          nickname:"",
          openid2:this.props.hospital.openid
      }
  }

    userInformationSkip = () => {
        // '我的信息'页面跳转
        this.props.findHospital();
        setTimeout(()=>
        {
            Taro.navigateTo({
                url: '/pages/myInformation/userInformation/index'
            })
        }, 500)
        this.setState({
            code:1
        })
    }

    myCollectionSkip = () => {
        // ’我的收藏‘页面跳转
        Taro.navigateTo({
            url: '/pages/myInformation/myCollection/index'
        })
    }

    myRegistrationSkip = () => {
        // ’我的收藏‘页面跳转
        Taro.navigateTo({
            url: '/pages/myInformation/myRegistration/index'
        })
    }

    effectEvaluationSkip = () => {
        // ’效果评价‘页面跳转
        Taro.navigateTo({
            url: '/pages/myInformation/effectEvaluation/index'
        })
    }

    identificationRecordsSkip = () => {
        // ’体质辨识记录‘页面跳转
        Taro.navigateTo({
            // url: '/pages/myInformation/identificationRecords/index'
            url: '/pages/myInformation/identificationRecords/index'
        })
    }

    addpatientSkip = () => {
        // ’就诊人添加‘页面跳转
        Taro.navigateTo({
            url: '/pages/myInformation/addpatient/index'
        })
    }

    shouquan=()=>{
        wx.getUserInfo({
            //成功后会返回
            success:(res)=>{
                console.log(res);
                // 把你的用户信息存到一个变量中方便下面使用
                let userInfo= res.userInfo
                this.setState({
                    nickname:userInfo.nickName,
                    avatar:userInfo.avatarUrl,
                })
                //获取openId（需要code来换取）这是用户的唯一标识符
                // 获取code值
                let avatar= userInfo.avatarUrl
                let nickname=userInfo.nickName
                this.props.hospital.avatar=avatar
                this.props.hospital.nickname=nickname
                wx.login({
                    //成功放回
                    success:(res)=>{
                        console.log(res.code);
                        this.state.code=res.code;
                        console.log(this.state.code);
                        // 通过code换取openId
                        console.log("转化获得的"+this.state.openid);
                        this.props.hospital.openid=Taro.request({
                            // url: 'https://www.fastmock.site/mock/4ea260afef1e26407be34bf87c61cdf7/login/loginIP', //仅为示例，并非真实的接口地址
                            url: 'http://localhost:8090/usert/getopenid',//仅为示例，并非真实的接口地址
                            data: {
                                code: this.state.code
                            },
                            header: {
                                'content-type': 'application/json' // 默认值
                            },
                            success: function (res) {
                                console.log("请求结果=",res.data.openid);
                                let openid1= res.data.openid
                                console.log("传递的",openid1);
                                Taro.request({
                                    // url: 'https://www.fastmock.site/mock/4ea260afef1e26407be34bf87c61cdf7/login/loginIP', //仅为示例，并非真实的接口地址
                                    url: 'http://localhost:8090/usert/create',//仅为示例，并非真实的接口地址
                                    data: {
                                        id:openid1,
                                        avatar: avatar
                                    },
                                    header: {
                                        'content-type': 'application/json' // 默认值
                                    },
                                    success: function (res) {
                                        console.log(res)
                                    }
                                })
                                return openid1
                            }
                        })
                    }
                })

            }
        })

        setTimeout(()=>
        {
            Taro.reLaunch({
                url: "/pages/myInformation/mainInformation/index"
            });
        }, 1000)
    }

  render() {

    return (

      <View className='index'>
          { this.state.openid2== "" ?<AtModal isOpened>
              <AtModalHeader>您是否授权</AtModalHeader>
              <AtModalContent>

              </AtModalContent>
              <AtModalAction> <Button>取消</Button> <Button onClick={this.shouquan}>确定</Button> </AtModalAction>
          </AtModal>:""}

        <View className='BackgroundPicture'>
          <View className='UserHeader' >
              <View className='topPart' onClick={this.userInformationSkip}>
                  <AtAvatar  size='100' circle image={this.state.avatar} className='headerPortrait'></AtAvatar>
                  <View className='userName'>{this.props.hospital.nickname}</View>
                  <AtIcon  value='chevron-right' size='30' color='rgb(255,255,255)' className='WhiteArrow'></AtIcon></View>
              </View>
        </View>
        <View className='BackgroundPicture2'></View>
        <View className='CentralPart'>
            <View className='top'>
                <View className='register' onClick={this.myRegistrationSkip}>
                    <AtIcon value='tag' size='50' color='red'></AtIcon>
                    我的挂号
                </View>
                <View className='patient' onClick={this.addpatientSkip}>
                    <AtIcon value='add-circle' size='50' color='red'></AtIcon>
                    就诊人管理
                </View>

            </View>
            <View className='myService'>
                <View className='service'>我的服务</View>
            </View>

            <View className='collection' onClick={this.myCollectionSkip}>
                <AtIcon value='star-2' size='30' color='rgb(203,191,113)' className='star'></AtIcon>
                <View className='word'>我的收藏</View>

                <AtIcon value='chevron-right' size='30' color='rgb(172,172,172)' className='blackArrow'></AtIcon>
            </View>
            <View className='evaluate' onClick={this.effectEvaluationSkip}>
                <AtIcon value='edit' size='30' color='rgb(203,191,113)' className='edit'></AtIcon>
                <View className='word'>效果评价</View>
                <AtIcon value='chevron-right' size='30' color='rgb(172,172,172)' className='blackArrow'></AtIcon>
            </View>
            <View className='record' onClick={this.identificationRecordsSkip}>
                <AtIcon value='file-generic' size='30' color='rgb(203,191,113)' className='fileGeneric'></AtIcon>
                <View className='word'>体质辨识记录</View>
                <AtIcon value='chevron-right' size='30' color='rgb(172,172,172)' className='blackArrow2'></AtIcon>
            </View>

        </View>
          <TabBar tabBarCurrent={2} />
      </View>
    )
  }
}

export default Index
