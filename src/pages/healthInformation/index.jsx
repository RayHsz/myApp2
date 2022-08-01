import {Component} from "react";
import './index.scss'
import { ScrollView,View } from "@tarojs/components";
import { AtSearchBar,AtGrid,AtList,AtListItem } from 'taro-ui'
import index from "@tarojs/react";
import TabBar from "../tabBarPage";

/*import * as url from "url";
import Taro from "@tarojs/taro";*/

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

    onScrollToUpper() {}

    onScroll(e){
        //console.log(e.detail)
    }

    handleClick=(item,index)=>{
        //console.log("文章分类名称 =",item.value)
        //console.log("index =",index)
    }

    render() {

        const scrollStyle = {
            // height: '238px'  //滚动刚好贴底部
            height: '450px'
        }
        const scrollTop = 0
        const Threshold = 20
        const vStyleA = {
            height: '150px',
            'background-color': 'rgb(26, 173, 25)'
        }
        const vStyleB = {
            height: '150px',
            'background-color': 'rgb(39,130,215)'
        }
        const vStyleC = {
            height: '150px',
            'background-color': 'rgb(241,241,241)',
            color: '#333'
        }

        return (
            <View className='body'>
                {/*搜索框*/}
                <View className='index'>
                    <AtSearchBar className='AtSearchBar' placeholder={'搜索健康资讯'} value={this.state.value} onChange={this.onChange.bind(this)}/>
                </View>

                {/*文章分类:这里是静态的*/}
                <AtGrid
                    onClick={this.handleClick}
                    data={
                        [
                            {
                                image: 'https://cdn.pixabay.com/photo/2016/10/23/17/06/calendar-1763587__340.png',
                                value: '节气养生'
                            },
                            {
                                image: 'https://cdn.pixabay.com/photo/2014/12/21/23/50/bowl-576169__340.png',
                                value: '自我保健'
                            },
                            {
                                image: 'https://cdn.pixabay.com/photo/2016/06/29/20/04/food-1487663__340.png',
                                value: '药膳食疗'
                            },
                            {
                                image: 'https://cdn.pixabay.com/photo/2021/01/17/09/59/achievement-5924443__340.png',
                                value: '中药常识'
                            },
                            {
                                image: 'https://cdn.pixabay.com/photo/2015/08/21/08/03/traditional-chinese-898567__340.jpg',
                                value: '中医文化'
                            },
                            {
                                image: 'https://cdn.pixabay.com/photo/2019/08/20/17/02/funny-4419254__340.png',
                                value: '儿科健康'
                            }
                        ]
                    } />

                {/*这是hr分割线*/}
                <View className='articleClassify'>
                </View>


                <ScrollView
                    className='scrollview'
                    scrollY
                    scrollWithAnimation
                    scrollTop={scrollTop}
                    style={scrollStyle}
                    lowerThreshold={Threshold}
                    upperThreshold={Threshold}
                    onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                    onScroll={this.onScroll}
                >
                    {/*文章列表*/}
                    <AtList>
                        <AtListItem
                            title='标题文字标题文字标题文字标题文字标题文字标题文字'
                            note='描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息...'
                            arrow='right'
                            extraText='2022/08/01'
                            thumb='https://cdn.pixabay.com/photo/2022/06/26/14/53/bird-7285669__340.jpg'
                        />
                        <AtListItem
                            title='标题文字标题文字标题文字标题文字标题文字标题文字'
                            note='描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息...'
                            arrow='right'
                            extraText='2022/08/01'
                            thumb='https://p4.itc.cn/q_70/images01/20220801/b37b2e829125447fb620b59c40af364a.jpeg'
                        />
                        <AtListItem
                            title='标题文字标题文字标题文字标题文字标题文字标题文字'
                            note='描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息...'
                            arrow='top'
                            extraText='2022/08/01'
                            thumb='https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042__340.jpg'
                        />
                        <AtListItem
                            title='标题文字标题文字标题文字标题文字标题文字标题文字'
                            note='描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息...'
                            arrow='top'
                            extraText='2022/08/01'
                            thumb='https://cdn.pixabay.com/photo/2022/07/10/19/30/house-7313645__340.jpg'
                        />
                        <AtListItem
                            title='标题文字标题文字标题文字标题文字标题文字标题文字'
                            note='描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息...'
                            arrow='top'
                            extraText='2022/08/01'
                            thumb='https://cdn.pixabay.com/photo/2022/07/16/20/05/universe-7325913__340.jpg'
                        />
                        <AtListItem
                            title='标题文字标题文字标题文字标题文字标题文字标题文字'
                            note='描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息...'
                            arrow='top'
                            extraText='2022/08/01'
                            thumb='https://cdn.pixabay.com/photo/2022/02/20/09/36/animal-7024080__340.png'
                        />
                        <AtListItem
                            title='标题文字标题文字标题文字标题文字标题文字标题文字'
                            note='描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息...'
                            arrow='top'
                            extraText='2022/08/01'
                            thumb='https://cdn.pixabay.com/photo/2022/07/18/19/57/dog-7330712__340.jpg'
                        />
                    </AtList>
                </ScrollView>

                <TabBar tabBarCurrent={1} />

            </View>
        )
    }
}

export default Index
