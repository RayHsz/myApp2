import {Component} from "react";
import {View} from "@tarojs/components";
import {AtButton, AtIcon} from "taro-ui";
import Taro from "@tarojs/taro";
import './index.scss'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import { AtActionSheet, AtActionSheetItem } from "taro-ui"

class Index extends Component{
    patientdata = () => {
        // 页面跳转
        Taro.navigateTo({
            url: '/pages/myInformation/addpatient/index'
        })
    }
    edit = () => {
        // 页面跳转
        Taro.navigateTo({
            url: '/pages/myInformation/addpatient/index'
        })
    }
    delate = () => {
        // 页面跳转
        Taro.navigateTo({
            url: '/pages/myInformation/patientmanagement/index'
        })
    }


    render() {
        return(

<View className='aaa'>
    <View className='index'>
        <View className='card1'>
            <View className='age'>II 0岁</View>
            <View className='id_card'>身份证号:320502200103174072</View>
            <View className='address'>住址：xxxxx</View>
            <View className='line'>————————————————</View>
            <View>
                <View className='de_patient'>默认就诊人</View>
                <View className='edit' onClick={this.edit}>
                    <AtIcon  value='edit' size='20'></AtIcon>
                    编辑
                </View>
                <View className='trash'>
                    <AtIcon value='trash'size='20'onClick={this.delate}></AtIcon>
                    删除
                </View>
            </View>
        </View>
    </View>
    <View className='addpatient' onClick={this.patientdata}>
        <AtButton className='addbutton' type='primary' circle size='normal' >添加就诊人</AtButton>
    </View>
</View>
        )
    }
}
export default Index