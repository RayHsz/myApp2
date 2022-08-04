import {Component} from "react";
import {View} from "@tarojs/components";
import {AtRate,AtDivider,AtIcon} from "taro-ui";
import './info.scss'


class Info extends Component{
    render() {
        let imgsrc1 = "http://116.205.177.247:8080/images/hotHospital-left.jpg";
        let likeBefore = "http://116.205.177.247:8080/images/likeBefore.png";
        let likeAfter = "http://116.205.177.247:8080/images/likeAfer.png";
        let buttonValue = [2,2,3,1,5,4];
        let likeNum = 7;
        return (
            <View className='header'>
                <View className='up'>
                    <View className='hospitalName'>
                        王西章乡卫生院国医堂
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
                    <View className='synopsis'>
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
                </View>
            </View>
        );
    }
}

export default Info