import React, {Component} from 'react';
import { AtTabBar }  from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import {BASEURL} from './global'
class TabBar extends Component {
    constructor () {
        super(...arguments);
        this.state = {
            itemcode: '',
            openid: ''
        }
    }


    handleClick (value) {
        console.log("tabBar ====" +value);
        switch (value) {
            case 0:
                Taro.reLaunch({
                    url: '/pages/homePage/index'
                });
                break;
            case 1:
                Taro.reLaunch({
                    url: '/pages/healthInformation/index' //'/pages/physicalIdentity/healthKnowledge'
                });
                break;
            case 2:
                Taro.reLaunch({
                    url: "/pages/myInformation/mainInformation/index"
                });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <View>
                <View style={{'height':'4rem'}} />
                <AtTabBar fixed
                          backgroundColor='#DCDCDC'
                          color='#696969'
                          selectedColor='#228B22'
                          iconColer='#696969'
                          iconSize='26'

                          tabList={[
                              { title: '首页', image: "/images/home.png", selectedImage: "/images/homeSD.png" },
                              { title: '健康资讯', image:  "/images/myConsult.png", selectedImage:  "/images/myConsultSD.png" },
                              { title: '我的', image: "/images/home.png", selectedImage: "/images/homeSD.png" }
                          ]}
                          onClick={this.handleClick.bind(this)}
                          current={this.props.tabBarCurrent}

                />

            </View>
        );
    }
}

export default TabBar;
