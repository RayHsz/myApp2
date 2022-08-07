import {Component} from "react";
import {View} from "@tarojs/components";
import {AtButton} from "taro-ui";
import {connect} from "react-redux";
import {findHospital} from "../../../actions/hospital";
import Taro from "@tarojs/taro";
import './index.scss'
import { AtAvatar } from 'taro-ui'
import { AtIcon } from 'taro-ui'
import TabBar from "../../tabBarPage";



@connect(({hospital}) => ({hospital}), {findHospital})
class Index extends Component {
  constructor(props) {
    super(props);
  }


    userInformationSkip = () => {
        // '我的信息'页面跳转
        Taro.navigateTo({
            url: '/pages/myInformation/userInformation/index'
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
            url: '/pages/myInformation/identificationRecords/index'
        })
    }

    addpatientSkip = () => {
        // ’体质辨识记录‘页面跳转
        Taro.navigateTo({
            url: '/pages/myInformation/addpatient/index'
        })
    }

  render() {
    return (
      <View className='index'>
        <View className='BackgroundPicture'>
          <View className='UserHeader' >
              <View className='topPart' onClick={this.userInformationSkip}>
                  <AtAvatar  size='100' circle image='' className='headerPortrait'></AtAvatar>
                  <View className='userName'>1900300539朱世贤</View>
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
