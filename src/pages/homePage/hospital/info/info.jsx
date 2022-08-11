import {Component} from "react";
import {ScrollView, View} from "@tarojs/components";
import {AtRate, AtDivider, AtIcon} from "taro-ui";
import './info.scss'
import TabBar from "../../../tabBarPage";
import Taro from "@tarojs/taro";
import {connect} from "react-redux";
import {getDoctorList} from "../../../../actions/hospital";

@connect(({hospital}) => ({hospital}), ({getDoctorList}))
class Info extends Component {
    showMember() {
        console.log("点击事件");
    }

    showSynopsis() {
        Taro.navigateTo({
            url: '../synopsis/synopsis'
        })
    }

    onScrollToUpper() {
    }

    // or 使用箭头函数
    // onScrollToUpper = () => {}

    onScroll(e) {

    }

    getDoctorInfo() {
        this.props.getDoctorList();
    }

    render() {
        let doctorInfo;
        let likeBefore = "http://116.205.177.247:8080/images/likeBefore.png";//点赞前的图片
        let likeAfter = "http://116.205.177.247:8080/images/likeAfer.png";//点赞后的图片
        let data = this.props.hospital.hospitalList[this.props.hospital.selectIndex];
        const scrollStyle = {
            height: '150px'
        }
        const scrollTop = 0
        const Threshold = 20

        if (this.props.hospital.doctorList.length === 0) {
            this.getDoctorInfo();
        } else {
            doctorInfo = this.props.hospital.doctorList.map((info, index) => {
                if (info.doctor_hospital.hospital_name === data.name) {
                    return (
                        <View className='DInf'>
                            <View className='inquiryNum'>
                                问诊量：{info.seeing}
                            </View>
                            <View className='headPortraits'>
                                <image src={info.avatar} alt="" className='doctorImg'/>
                            </View>
                            <View className='doctorName'>
                                {info.doctorName}
                            </View>
                            <View className='doctorPosition'>
                                {info.position}
                            </View>
                            <View className='skill'>
                                擅长治疗：{info.skill}
                            </View>
                            <View className='belong'>
                                {info.doctor_hospital.hospital_name}
                            </View>
                        </View>
                    )
                }
            })
        }

        return (
            <View>
                <View className='header'>
                    <View className='up'>
                        <View className='hospitalName'>
                            {data.name}
                        </View>
                        <image src={data.image} className='hospitalPicture'/>
                        <View className='pingFen'>
                            评分：
                        </View>
                        <AtRate
                            className='score'
                            size='15'
                            value={data.score}
                        />
                        <View className='synopsis' onClick={this.showSynopsis}>
                            医院简介>
                        </View>
                        <image src={likeBefore} className='likeBefore'/>
                        <View className='likeNum'>
                            {data.likeNum}
                        </View>
                    </View>
                    <AtDivider className='cuttingLine'/>
                    <View className='down'>
                        <AtIcon value='map-pin' size='20' color='red' className='mapPin'/>
                        <View className='place'>
                            {data.address}
                        </View>
                        <AtIcon value='phone' size='20' color='red' className='phone'/>
                        <View className='phoneNum'>
                            {data.phone}
                        </View>
                    </View>
                </View>
                <View className='mainPart'>
                    <View className='reservationService'>
                        <View className='serviceIcon'>
                            <AtIcon value='add' size='32' color='white' className='add'/>
                        </View>
                        <View className='serviceMS'>
                            预约服务
                        </View>
                    </View>
                    <View className='nav'>
                        <View className='serviceTeam'>
                            <text className='FWTD'>服务团队</text>
                        </View>
                        <View className='project'>
                            <text className='KZXM'>开展项目</text>
                        </View>
                    </View>
                    <ScrollView
                        className='scrollview'
                        scrollY
                        scrollWithAnimation
                        scrollTop={scrollTop}
                        style={scrollStyle}
                        lowerThreshold={Threshold}
                        upperThreshold={Threshold}
                        onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                        onScroll={this.onScroll}
                    >
                        {doctorInfo}
                    </ScrollView>
                    <View className='launchProjects'>
                    </View>
                </View>
                <TabBar tabBarCurrent={0}/>
            </View>
        );
    }
}

export default Info