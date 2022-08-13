import {Component} from "react";
import {View} from "@tarojs/components";
import './index.scss'
import TabBar from "../../tabBarPage/index";
import {AtIcon} from "taro-ui";
import {connect} from "react-redux";
import {findResult} from "../../../actions/user";

@connect(({user}) => ({user}),{findResult})
class Index extends Component {
  render() {
    return (
        <View>
            <View className='at-row'>
                <View className='at-col at-col-3'>
                    <View className='first'>日期</View>

                </View>
                <View className='at-col at-col-6'>
                    <View className='first'>体质</View>

                </View>
                <View className='at-col at-col-3'>
                    <View className='first'>操作</View>
                </View>

            </View>
            {
            this.props.user.resultList.map((user,index)=>{
                return(
                    <View className='at-row'>
                        <View className='at-col at-col-3'>
                            <View className="reqi">{user.time}</View>
                        </View>
                        <View className='at-col at-col-6'>
                            <View className="tizhi">倾向是:{user.constitution}</View>
                        </View>
                        <View className='at-col at-col-3' >
                            <View className="chakan">查看</View>
                        </View>
                    </View>

                )

            })
        }
            <TabBar tabBarCurrent={2} />
        </View>


    )
  }
}

export default Index
