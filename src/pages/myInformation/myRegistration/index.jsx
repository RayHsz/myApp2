import {Component} from "react";
import {View} from "@tarojs/components";
import './index.scss'
import {AtIcon, AtToast} from "taro-ui"
import TabBar from "../../tabBarPage";




class Index extends Component {
    render() {
        return (
            <View className='a'>
                <AtToast isOpened text="您还没有挂号记录哟~" ></AtToast>
                <TabBar tabBarCurrent={2} />
            </View>

        )
    }
}

export default Index
