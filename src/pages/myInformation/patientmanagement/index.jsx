import {Component} from "react";
import {View} from "@tarojs/components";
import {AtButton} from "taro-ui";
import Taro from "@tarojs/taro";
import './index.scss'

class Index extends Component{
    patientdata1 = () => {
        // 页面跳转
        Taro.navigateTo({
            url: '/pages/myInformation/addpatient/index'
        })
    }


    render() {
        return(

            <View className='addpatient' onClick={this.patientdata1}>
                <AtButton className='addbutton' type='primary' circle size='normal' >添加就诊人</AtButton>
            </View>
        )
    }
}
export default Index