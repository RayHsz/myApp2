import {Component} from "react";
import './index.scss'
import {Input, Text, View} from "@tarojs/components";
import { AtSearchBar,AtButton,AtAvatar } from 'taro-ui'
import index from "@tarojs/react";
import TabBar from "../tabBarPage";

class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            value: ''
        }
    }

    onChange (value) {
        console.log("点击了button")
        this.setState({
            value: value
        })
    }

    render() {

        return (
            <View className='body'>
                {/*搜索框*/}
                <View className='index'>
                    {/*<Input className='search' type='text' placeholder='搜索健康咨询' placeholderClass='searchText' focus />*/}
                    <AtSearchBar className='AtSearchBar' placeholder={'搜索健康资讯'} value={this.state.value} onChange={this.onChange.bind(this)}/>
                </View>

                {/*文章分类*/}
                <View className='articleClassify'>
                    <View className='wzfl a'>
                        <AtAvatar className='wzfl-img' size='normal' circle image='../../images/homeSD.png'></AtAvatar>
                        <Text className='wzfl-title'>养生节气</Text>
                    </View>
                    <View className='wzfl b'>
                        <AtAvatar className='wzfl-img' size='normal' circle image='../../images/myConsultSD.png'></AtAvatar>
                    </View>
                    <View className='wzfl c'>
                        <AtAvatar className='wzfl-img' size='normal' circle image='../../images/homeSD.png'></AtAvatar>
                    </View>
                    <View className='wzfl d'>
                        <AtAvatar className='wzfl-img' size='normal' circle image='../../images/myConsultSD.png'></AtAvatar>
                    </View>
                    <View className='wzfl e'>
                        <AtAvatar className='wzfl-img' size='normal' circle image='../../images/homeSD.png'></AtAvatar>
                    </View>
                    <View className='wzfl f'>
                        <AtAvatar className='wzfl-img' size='normal' circle image='../../images/myConsultSD.png'></AtAvatar>
                    </View>
                </View>


                {/*文章轮播图*/}
                <AtButton type='primary'>文章轮播图</AtButton>
                <AtButton type='secondary'>文章轮播图</AtButton>
                <TabBar tabBarCurrent={1} />
            </View>
        )
    }
}

export default Index
