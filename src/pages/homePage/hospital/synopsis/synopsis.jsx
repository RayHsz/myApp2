import {Component} from "react";
import {View} from "@tarojs/components";
import {AtDivider, AtIcon} from "taro-ui";
import './synopsis.scss'


class Synopsis extends Component{

    render() {
        let hospital = "王西章乡卫生院国医堂";
        let description = "水电费会计师离开的房间里睡大觉老师就了大幅记录是叠加法绿色动力开发加了世纪东方垃圾收到了房间里撒空间的了见识到了聚少离多";
        let place = "石家庄市赵县王西章乡王西章村北";
        let phoneNum = "84935120";
        return (
            <View>
                <View className='mainBody'>
                    <View className='title'>
                        医院简介
                    </View>
                    <View className='hospitalName'>
                        {hospital}
                    </View>
                    <View className='describe'>
                        {description}
                    </View>
                    <AtDivider className='cuttingLine1'/>
                    <AtIcon value='map-pin' size='20' color='red' className='mapPin' />
                    <View className='place'>
                        {place}
                    </View>
                    <AtIcon value='phone' size='20' color='red' className='phone' />
                    <View className='phoneNum'>
                        {phoneNum}
                    </View>
                    <AtDivider className='cuttingLine2'/>
                </View>
                <View>

                </View>
            </View>

        );
    }
}

export default Synopsis