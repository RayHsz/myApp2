import {Component} from "react";
import {View} from "@tarojs/components";
import './index.scss'
import TabBar from "../../tabBarPage";


class Index extends Component {
  render() {
    return (
      <View className=''>
        您并没有收藏，请加油去收藏噢亲~
        <TabBar tabBarCurrent={2} />
      </View>
    )
  }
}

export default Index
