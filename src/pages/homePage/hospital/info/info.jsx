import {Component} from "react";
import {ScrollView, View} from "@tarojs/components";
import {AtRate,AtDivider,AtIcon} from "taro-ui";
import './info.scss'
import TabBar from "../../../tabBarPage";
import Taro from "@tarojs/taro";


class Info extends Component{
    showMember(){
        console.log("点击事件");
    }

    showSynopsis(){
        Taro.navigateTo({
            url:'../synopsis/synopsis'
        })
    }

    onScrollToUpper() {}

    // or 使用箭头函数
    // onScrollToUpper = () => {}

    onScroll(e){

    }

    render() {
        let imgsrc1 = "http://116.205.177.247:8080/images/hotHospital-left.jpg";
        let likeBefore = "http://116.205.177.247:8080/images/likeBefore.png";
        let likeAfter = "http://116.205.177.247:8080/images/likeAfer.png";

        let buttonValue = [2,2,3,1,5,4];
        let likeNum = 7;
        let hospitalName = "王西章乡卫生院国医堂";
        let place = "石家庄市赵县王西章乡王西章村北";
        let phoneNum = "84935120";
        let names = ['马海霞','司丽彩'];
        let positions = ['执业医师','助理医师'];
        let skills = ['月经病类','眩晕病'];
        let inquiryNum = 0;

        const scrollStyle = {
            height: '150px'
        }
        const scrollTop = 0
        const Threshold = 20

        return (
            <View>
                <View className='header'>
                    <View className='up'>
                        <View className='hospitalName'>
                            {hospitalName}
                        </View>
                        <image src={imgsrc1} className='hospitalPicture'/>
                        <View className='pingFen'>
                            评分：
                        </View>
                        <AtRate
                            className='score'
                            size='15'
                            value={buttonValue[0]}
                        />
                        <View className='synopsis' onClick={this.showSynopsis}>
                            医院简介>
                        </View>
                        <image src={likeBefore} className='likeBefore' />
                        <View className='likeNum'>
                            {likeNum}
                        </View>
                    </View>
                    <AtDivider className='cuttingLine'/>
                    <View className='down'>
                        <AtIcon value='map-pin' size='20' color='red' className='mapPin' />
                        <View className='place'>
                            {place}
                        </View>
                        <AtIcon value='phone' size='20' color='red' className='phone' />
                        <View className='phoneNum'>
                            {phoneNum}
                        </View>
                    </View>
                </View>
                <View className='mainPart'>
                    <View className='reservationService'>
                        <View className='serviceIcon'>
                            <AtIcon value='add' size='32' color='white' className='add' />
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
                        <View className='DInf'>
                            <View className='inquiryNum'>
                                问诊量：{inquiryNum}
                            </View>
                            <View className='headPortraits'>

                            </View>
                            <View className='doctorName'>
                                {names[0]}
                            </View>
                            <View className='doctorPosition'>
                                {positions[0]}
                            </View>
                            <View className='skill'>
                                擅长治疗：{skills[0]}
                            </View>
                            <View className='belong'>
                                {hospitalName}
                            </View>
                        </View>
                        <View className='DInf'>
                            <View className='inquiryNum'>
                                问诊量：{inquiryNum}
                            </View>
                            <View className='headPortraits'>

                            </View>
                            <View className='doctorName'>
                                {names[1]}
                            </View>
                            <View className='doctorPosition'>
                                {positions[1]}
                            </View>
                            <View className='skill'>
                                擅长治疗：{skills[1]}
                            </View>
                            <View className='belong'>
                                {hospitalName}
                            </View>
                        </View>
                    </ScrollView>
                    <View className='launchProjects'>
                    </View>
                </View>
                <TabBar tabBarCurrent={0} />
            </View>
        );
    }
}

export default Info