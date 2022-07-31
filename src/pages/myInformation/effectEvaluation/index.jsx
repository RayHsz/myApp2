import {Component} from "react";
import {View} from "@tarojs/components";
import './index.scss'
import TabBar from "../../tabBarPage";

class Index extends Component {
  render() {
    return (
        <View className=''>
          <View className='at-row'>

            <View className='at-col at-col-3'>
              <View className='first'>日期</View>
              <View>22</View>
            </View>
            <View className='at-col at-col-3'>
              <View className='first'>疾病</View>
              <View>33</View>
            </View>
            <View className='at-col at-col-3'>
              <View className='first'>总体评价</View>
              <View>44</View>
            </View>
            <View className='at-col at-col-3'>
              <View className='first'>操作</View>
              <View>查看</View>
            </View>
          </View>
          <TabBar tabBarCurrent={2} />
        </View>
    )
  }
}

export default Index
