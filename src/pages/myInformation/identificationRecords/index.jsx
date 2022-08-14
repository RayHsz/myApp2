import {Component} from "react";
import {View} from "@tarojs/components";
import './index.scss'
import TabBar from "../../tabBarPage/index";
import {AtIcon} from "taro-ui";
import {connect} from "react-redux";
import {findResult} from "../../../actions/user";
import Taro from "@tarojs/taro";
@connect(({user}) => ({user}),{findResult})
class Index extends Component {
    goToResult=()=>{
        Taro.navigateTo({
            url: '../../homePage/assess/result/index'
        })
    }
  render() {
    return (
        <View>
            <View className='at-row'>
                    <View className='at-col at-col-3'>
                        <View className='first'>
                            <View className='jkwenzi'>
                                日期
                            </View>

                        </View>

                    </View>
                    <View className='at-col at-col-6'>
                        <View className='first'>
                            <View className='jkwenzi'>
                                体质
                            </View>
                        </View>

                    </View>
                    <View className='at-col at-col-3'>
                        <View className='first'>
                            <View className='jkwenzi'>
                                操作
                            </View>
                        </View>
                    </View>

            </View>
            {
            this.props.user.resultList.map((user,index)=>{
                return(
                    <View className='at-row'>
                        <View className='at-col at-col-3'>
                            <View className="second">
                                <View className="knwenzi f">{user.time}</View>
                            </View>
                        </View>
                        <View className='at-col at-col-6'>
                            <View className="second">
                                <View className="knwenzi f">倾向是：{user.constitution}</View>
                            </View>
                        </View>
                        <View className='at-col at-col-3' >
                            <View className="second">
                                <View className="knwenzi s" onClick={this.goToResult}>查看</View>
                            </View>
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
