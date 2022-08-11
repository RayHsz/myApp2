import {Component} from "react";
import './index.scss'
import { ScrollView,View } from "@tarojs/components";
import { AtSearchBar,AtGrid,AtList,AtListItem } from 'taro-ui'
import TabBar from "../../tabBarPage";
import Taro from "@tarojs/taro";
import config from "../../../http/config";
import {connect} from "react-redux";
import {findHospital} from "../../../actions/hospital";

@connect(({hospital}) => ({hospital}),{findHospital})
class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            value: '',
            articleList:[]
        }
    }



    onScrollToUpper() {}

    onScroll(e){
        //console.log(e.detail)
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
            url: 'http://localhost:8090/collections/getAllArticleUserCollected',
            data: {
                open_id:"oL7Uf5p-bXzCsxpUr5Efu7-KqEo0"
            },
            header: { 'content-type': 'application/json'}
        }).then(res =>{
            //console.log("请求结果=",res.data.data);
            console.log("这里的openid为："+this.props.hospital.openid);
            console.log("生命周期，钩子函数，初次请求文章结果 =",res);
            this.setState({
                articleList : res.data
            })
            console.log("这里的articleList为",this.state.articleList);
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
                <TabBar tabBarCurrent={2} />

            </View>
        )
    }
}

export default Index
