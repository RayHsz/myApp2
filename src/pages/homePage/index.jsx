import {Component} from "react";
import {View} from "@tarojs/components";
import {connect} from "react-redux";
import {findHospital} from "../../actions/hospital";
import './index.scss';
import { AtSearchBar } from 'taro-ui';
import { Swiper, SwiperItem } from '@tarojs/components';
import Taro from "@tarojs/taro";
import TabBar from "../tabBarPage";

@connect(({hospital}) => ({hospital}), {findHospital})
class Index extends Component {
    constructor(props) {
        super(props);
    }
    onChange (value) {
        this.setState({
            //value: value
        })
    }
    goToAIGuidance=()=> {
        Taro.navigateTo({
            url: 'aiGuidance/index'
        })
    }
    render () {
        return (
            <View className='index'>
                <View className='at-search-bar'>
                    <AtSearchBar
                        //value={this.state.value}
                        onChange={this.onChange.bind(this)}
                        //onActionClick={this.onActionClick.bind(this)}
                    />
                </View>
                <View className='rotationPicture'>
                    <Swiper
                        className='test-h'
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        circular
                        indicatorDots
                        interval={1000}
                        autoplay='true'>
                        <SwiperItem>
                            <View className='demo-text-1'>
                                <image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.meituan.net%2Fdpdeal%2F39c2835a12ce089d59a9515fea5e8e81_1_b8eb8f1aa8e3ef7a_1_VYZWCqK79n5SQeHubnOEoxg0L6%252BYmOmxAsbC%252FnNdAkMclV%252BlSb4KJ6bthuUdaWIshIS1Cd302velrT%252FP2RieT5yosP8xC76UC4JWdbEwxW4gQZA%252F3FD8w0hqAacB4eqfDradPKPEA%252FrhWcdZnlItuw%253D%253D&refer=http%3A%2F%2Fp1.meituan.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661840518&t=d39509f8c99edf43d4329128680185b7">
                                </image>
                            </View>
                        </SwiperItem>
                        <SwiperItem>
                            <View className='demo-text-2'>
                                <image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg8.iqilu.com%2Fksdimgs%2F2017%2F11%2F12%2F0735a5f0dab7687c418944bb393f980f.jpg&refer=http%3A%2F%2Fimg8.iqilu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661840518&t=cba649418605d11f24e8d30872ae33c4">
                                </image>
                            </View>
                        </SwiperItem>
                        <SwiperItem>
                            <View className='demo-text-3'>
                                <image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ouxunsi.com%2Fupload%2Feditor%2F201911%2F2019111415183742328.jpg&refer=http%3A%2F%2Fwww.ouxunsi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661840518&t=6ea814a24e9bb8ce266ef00f0f348cd6">
                                </image>
                            </View>
                        </SwiperItem>
                    </Swiper>
                </View>
                <View className='action'>
                    <View className='at-button'>
                        <text className='title'>国医堂</text>
                    </View>
                    <View className='at-button'>
                        <text className='title'>预约服务</text>
                    </View>
                    <View className='at-button' onClick={this.goToAIGuidance}>
                        <text className='title'>智能导诊</text>
                    </View>
                </View>

                <TabBar tabBarCurrent={0} />

            </View>
        )
    }
}

export default Index
