import {Component} from "react";
import {View} from "@tarojs/components";
import {AtButton, AtIcon} from "taro-ui";
import Taro from "@tarojs/taro";
import './index.scss'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import { AtActionSheet, AtActionSheetItem } from "taro-ui"
import {connect} from "react-redux";
import {finddata, findHospital} from "../../../actions/hospital";
import TabBar from "../../tabBarPage";



@connect(({hospital}) => ({hospital}), ({findHospital},{finddata}))
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
        // Taro.request({
        //     url: 'http://localhost:8090/getAllList', //仅为示例，并非真实的接口地址
        //     data: {},
        //     header: {
        //         'content-type': 'application/json' // 默认值
        //     },
        //     success: function (res) {
        //         // 调reducer修改数据
        //         console.log(res.data.data);
        //         console.log(res.data.data.idcardnumber);
        //     }
        // })
        // console.log(idcardnumber);
        // Taro.request({
        //     url: 'http://localhost:8090/delPatient', //仅为示例，并非真实的接口地址
        //     data: {},
        //     header: {
        //         'content-type': 'application/json' // 默认值
        //     },
        //     success: function (res) {
        //         // 调reducer修改数据
        //         console.log(res);
        //
        //     }
        // })
        // 页面跳转
        // Taro.navigateTo({
        //     url: '/pages/myInformation/patientmanagement/index'
        // })
    }


    render() {
        const getArray = this.props.hospital.List.map((info, index) => {
            return(
                <View className='index'>
                    <View className='card1'>
                        <View className='age'>{info.name}  21岁</View>
                        <View className='id_card'>身份证号:{info.idcardnumber}</View>
                        <View className='address'>住址：{info.de_addreess}</View>
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
            )
        })
        return(
            <View>
                <View className='aaa'>
                    {getArray}
                    <View className='addpatient' onClick={this.patientdata}>
                        <AtButton className='addbutton' type='primary' circle size='normal' >添加就诊人</AtButton>
                    </View>
                </View>
                <TabBar tabBarCurrent={0}/>
            </View>

        )
    }
}
export default Index