import {Component} from "react";
import {View} from "@tarojs/components";
import './index.scss'
import TabBar from "../../tabBarPage";
import { AtTabs, AtTabsPane } from 'taro-ui'

class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
    const tabList = [{ title: '已评价' }, { title: '未评价' }]
    return (
        <View>
          <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
            <AtTabsPane current={this.state.current} index={0} >
              <View style=' 50px;background-color: #FAFBFC;' >
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
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1} >
              <View style=' 50px;background-color: #FAFBFC;' >
                <View className='at-row'>
                  <View className='at-col at-col-3'>
                    <View className='first'>日期</View>
                    <View>22</View>
                  </View>
                  <View className='at-  col at-col-3'>
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
              </View>
            </AtTabsPane>
          </AtTabs>
          <TabBar tabBarCurrent={2} />
        </View>
    )
  }
}

export default Index
