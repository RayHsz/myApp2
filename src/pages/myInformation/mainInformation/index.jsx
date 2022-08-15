import {Component} from "react";
import {Button, View} from "@tarojs/components";
import {AtButton, AtModal, AtModalAction, AtModalContent, AtModalHeader} from "taro-ui";
import {connect} from "react-redux";
import Taro from "@tarojs/taro";
import './index.scss'
import { AtAvatar } from 'taro-ui'
import { AtIcon } from 'taro-ui'
import TabBar from "../../tabBarPage";
import { AtToast } from "taro-ui"
import {create, findCode, findNick, findOpenid, findResult, findUser} from "../../../actions/user";


@connect(({user}) => ({user}),({findUser,findResult,findNick,findCode,findOpenid,create}))
class Index extends Component {
  constructor(props) {
    super(props);
      this.state = {
          code:"",
          openid:"",
          avatar:this.props.user.avatar,
          nickname:"",
          openid2:this.props.user.openid,
          quxiao:true,
          tsquxiao:false,
          cgshouquan:false
      }
  }

    userInformationSkip = () => {
        // '我的信息'页面跳转
        this.props.findUser();
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
        this.props.findResult();
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

    quxiao=()=>{
        this.setState({
            quxiao:false,
            tsquxiao:true
        })
    }

    shouquan=()=>{
        this.props.findNick()
        this.props.findCode(this.props.user.code)
        this.props.findOpenid()
        this.props.create(this.props.user.openid,this.props.user.avatar)

        setTimeout(()=>
        {
            Taro.reLaunch({
                url: "/pages/myInformation/mainInformation/index"
            });
        }, 1000)

        this.setState({
            cgshouquan:true
        })
    }

  render() {

    return (
        //利用三元判断来决定是否显示提示
      <View className='index'>
          { this.state.openid2== "" ?<AtModal isOpened={this.state.quxiao} >
              <AtModalHeader></AtModalHeader>
              <AtModalContent className="tishi" >
                  您是否授权~
              </AtModalContent>
              <AtModalContent className="tishi2">
                  (授权的话您可以享受本小程序超便捷的服务噢,快来授权试试吧~)
              </AtModalContent>
              <AtModalAction> <Button onClick={this.quxiao}>取消</Button> <Button onClick={this.shouquan}>确定</Button> </AtModalAction>
          </AtModal>:""}

          <AtToast isOpened text="您取消了授权~" isOpened={this.state.tsquxiao}></AtToast>
          <AtToast isOpened text="成功授权~" isOpened={this.state.cgshouquan}></AtToast>
        <View className='BackgroundPicture'>
          <View className='UserHeader' >
              <View className='topPart' onClick={this.userInformationSkip}>
                  <AtAvatar  size='100' circle image={this.state.avatar} className='headerPortrait'></AtAvatar>
                  <View className='userName'>{this.props.user.nickname}</View>
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
