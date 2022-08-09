import {Component} from "react";
import './index.scss'
import { ScrollView,View } from "@tarojs/components";
import { AtSearchBar,AtGrid,AtList,AtListItem } from 'taro-ui'
import TabBar from "../tabBarPage";
import Taro from "@tarojs/taro";
import config from "../../http/config";

class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            value: '',
            articleList:[]
        }
    }

    /* 搜索栏，文章查询:这个函数是实时显示搜索框中的值 */
    onChange (value) {
        //console.log("点击了button，当前搜索栏的值：",value)
        this.setState({
            value: value
        })
    }
    /* 搜索栏，点击搜索按钮后:模糊搜索有特定关键词的文章 */
    searchArticle =()=>{
        //console.log("点击了搜索按钮，当前搜索内容 = ",this.state.value)  //获取到的内容正确
        Taro.request({
            url: 'https://www.fastmock.site/mock/04d7d10ca66bca7861c545d7cf2ed1ca/aricle/searchArticle',
            data: {
                conditions : this.state.value  //将当前输入框中的文字传到后端中作为条件进行查询
            },
            header: { 'content-type': 'application/json'}
        }).then(res =>{
            console.log("搜索条件 =",res.data.conditions);
            console.log("搜索结果 =",res.data.data);
            this.setState({
                articleList : res.data.data
            })
        })
    }

    onScrollToUpper() {}

    onScroll(e){
        //console.log(e.detail)
    }

    handleClick= (item,index) => {
        //当点击了文章分类之后，需要根据文章类型获取对应的文章，并重新渲染
        Taro.request({
            url: 'https://www.fastmock.site/mock/04d7d10ca66bca7861c545d7cf2ed1ca/aricle/getAricle',
            data: {},
            header: { 'content-type': 'application/json'}
        }).then(res =>{
            console.log("'"+item.value+"'查询结果=",res.data.data);
            this.setState({
                articleList : res.data.data
            })
        })

    }

    //点击文章跳转事件
    toArticle (item) {
        let data = JSON.stringify(item) //首先对获取到的item进行JSON格式化
        Taro.navigateTo({
            //跳转到文章页面，并将当前的文章id传到文章页面，方便文章页面的操作
            url: 'article/index?data='+ `${encodeURIComponent(data)}`  //对JSON对象进行编码后传递
        })
    }

    getArticleList=()=>{
        Taro.request({
            url: 'https://www.fastmock.site/mock/04d7d10ca66bca7861c545d7cf2ed1ca/aricle/getAricle',
            //url: 'https://g8.glypro19.com/api/aricle/getAricleList',
            data: {
            },
            header: { 'content-type': 'application/json'}
        }).then(res =>{
            //console.log("请求结果=",res.data.data);
            console.log("生命周期，钩子函数，初次请求文章结果 =",res);
            this.setState({
                articleList : res.data.data
            })
        })
    }

    /*生命周期，钩子函数*/
    componentDidMount() {
        this.getArticleList()
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

        const atListItem = this.state.articleList.map((item,index)=>{
            return(
                <AtListItem
                    onClick= {() =>this.toArticle(item)}  //在onClick事件传参的时候，只要写成箭头函数的方式，就不会被立即执行
                    title= {item.title}
                    note= {item.content.substr(0,44)+"..."}  //文章内容
                    arrow= "top"
                    extraText= {item.time.substr(0,10)}  //文章时间
                    thumb= {item.img}
                />
            )
        })  //遍历文章列表

        return (
            <View className='body'>
                {/*搜索框*/}
                <View className='index'>
                    <AtSearchBar
                        className='AtSearchBar'
                        placeholder={'搜索健康资讯'}
                        value={this.state.value}
                        onChange={this.onChange.bind(this)}
                        onActionClick={this.searchArticle}
                    />
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


                {/*文章列表的滚动槽*/}
                <ScrollView
                    className='scrollview'
                    scrollY
                    scrollWithAnimation
                    scrollTop={scrollTop}
                    style={scrollStyle}
                    lowerThreshold={Threshold}
                    upperThreshold={Threshold}
                    onScrollToUpper={this.onScrollToUpper.bind(this)}
                    onScroll={this.onScroll}
                >
                    {/*文章列表*/}
                    <AtList>
                        {atListItem}
                    </AtList>
                </ScrollView>

                <TabBar tabBarCurrent={1} />

            </View>
        )
    }
}

export default Index
