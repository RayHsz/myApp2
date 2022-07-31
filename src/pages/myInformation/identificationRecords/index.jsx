import {Component} from "react";
import {View} from "@tarojs/components";
import './index.scss'
import TabBar from "../../tabBarPage/index";
import {AtIcon} from "taro-ui";
class Index extends Component {
  render() {
    return (
      <View className=''>
        <View className='at-row'>

            <View className='at-col at-col-3'>
              <View className='first'>日期</View>
              <View>22</View>
            </View>
            <View className='at-col at-col-6'>
              <View className='first'>体质</View>
              <View>33</View>
            </View>
            <View className='at-col at-col-3'>
              <View className='first'>操作</View>
              <View>55</View>
            </View>
            <AtIcon value='user' size='38' color='rgb(141,141,141)' className='star'></AtIcon>
            <TabBar tabBarCurrent={2} />


        </View>
      </View>
    )
  }
}

export default Index
