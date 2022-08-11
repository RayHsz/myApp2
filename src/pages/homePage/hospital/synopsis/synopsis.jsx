import {Component} from "react";
import {View} from "@tarojs/components";
import {AtDivider, AtIcon} from "taro-ui";
import './synopsis.scss'
import {connect} from "react-redux";

@connect(({hospital}) => ({hospital}))
class Synopsis extends Component{

    render() {
        let data = this.props.hospital.hospitalList[this.props.hospital.selectIndex];
        return (
            <View>
                <View className='mainBody'>
                    <View className='title'>
                        医院简介
                    </View>
                    <View className='hospitalName'>
                        {data.name}
                    </View>
                    <View className='describe'>
                        {data.synopsis}
                    </View>
                    <AtDivider className='cuttingLine1'/>
                    <AtIcon value='map-pin' size='20' color='red' className='mapPin' />
                    <View className='place'>
                        {data.address}
                    </View>
                    <AtIcon value='phone' size='20' color='red' className='phone' />
                    <View className='phoneNum'>
                        {data.phone}
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