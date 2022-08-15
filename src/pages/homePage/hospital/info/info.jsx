import {Component} from "react";
import {Image, ScrollView, View} from "@tarojs/components";
import {AtSegmentedControl,AtRate, AtDivider, AtIcon} from "taro-ui";
import './info.scss'
import TabBar from "../../../tabBarPage";
import Taro from "@tarojs/taro";
import {connect} from "react-redux";
import {getDoctorList, getProgramList, theOneProgram} from "../../../../actions/hospital";

@connect(({hospital}) => ({hospital}), ({theOneProgram,getDoctorList,getProgramList}))
class Info extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            current: 0
        }
    }
    handleClick (value) {
        this.setState({
            current: value
        })
    }
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
    toProgramInfo=(temp)=>{
        let data = JSON.stringify(temp)
        Taro.navigateTo({
            url: '/pages/homePage/reservationService/programinfo/pinfo?data='+`${encodeURIComponent(data)}`
        })
    }
    getDoctorInfo() {
        this.props.getDoctorList();
    }
    getProgramInfo(){
        this.props.getProgramList();

    }
    serviceDoctor=()=>{
        this.className='bserviceTeam';
    }
    render() {
        let doctorInfo;
        let programInfo;
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
        } else if(this.props.hospital.programList.length === 0){
            this.getProgramInfo();
        }else {
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
            programInfo =this.props.hospital.programList.map((temp,index)=>{
                if(temp.hospital_id === data.id){
                    return(
                        <View className='DInf' onClick={this.toProgramInfo.bind(this,temp)}>
                            <View className='doctorName'>
                                {temp.name}
                            </View>
                            <View>
                                浏览量:{temp.views}
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
                        <AtSegmentedControl
                        className='nav'
                        values={['服务团队', '开展项目']}
                        onClick={this.handleClick.bind(this)}
                        current={this.state.current}
                        selectedColor='rgb(188,54,53)'
                    />
                        {
                            this.state.current === 0
                                ? <View className=''>
                                    <ScrollView
                                    className='serviceTeam'
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
                                </ScrollView></View>
                                : null
                        }
                        {
                            this.state.current === 1
                                ? <View className=''>
                                    <ScrollView
                                    className='serviceTeam'
                                    scrollY
                                    scrollWithAnimation
                                    scrollTop={scrollTop}
                                    style={scrollStyle}
                                    lowerThreshold={Threshold}
                                    upperThreshold={Threshold}
                                    onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                                    onScroll={this.onScroll}
                                >
                                    {programInfo}
                                </ScrollView></View>
                                : null
                        }
                    <View className='launchProjects'>
                    </View>
                </View>
                <TabBar tabBarCurrent={0}/>
            </View>
        );
    }
}

export default Info