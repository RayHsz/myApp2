import {Component} from "react";
import { ScrollView,View,Image,RichText } from "@tarojs/components";
import { AtRate,AtToast  } from "taro-ui";
import './index.scss';
import TabBar from "../../tabBarPage";
import Taro,{useRouter,getCurrentInstance} from "@tarojs/taro";
import '@tarojs/taro/html5.css'

class Index extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            value: false,
            articleItem : {},
        }
    }

    handleChange = (value) => {
        this.setState({
            value : !this.state.value
        })
        /* 此处写用户点击文章收藏按钮后的事件 */
        Taro.request({
            url: "https://www.fastmock.site/mock/965e6de95059191fe32e76a478990072/user/collections",
            data: {
                userInfo : "zhangsan",  //这里的userInfo待定，需要通过接口获取用户的信息
                article_id : this.state.articleItem.id
            },
            header: { 'content-type': 'application/json'}
        }).then(res =>{
            console.log("总体结果=",res)
            console.log("搜索结果:userInfo=",res.data.userInfo + "和article_id=" + res.data.article_id);
        })
    }

    onScrollToUpper() {}

    onScroll(e){
        //console.log(e.detail)
    }

    /*
    * 当跳转到文章详情页面之后
    * 1.获取由健康咨询页面 传过来的某篇文章的详细信息
    * 2.向后端发起请求，查看当前用户是否已经收藏了该文章，并对星星进行显示或隐藏
    */
    $instance = getCurrentInstance()
    componentDidMount () { //生命周期 钩子函数
        let data = JSON.parse(decodeURIComponent(this.$instance.router.params.data)) //对传过来的经过编码的JSON对象进行解码
        console.log("当前文章页面，传过来的articleItem =" , data);
        /*
           这里发送请求，判断当前用户是否已经收藏当前文章
           并对 星星初始状态进行设置
        */
        this.setState({
            articleItem : data  //将从前面页面获取到的文章信息进行赋值
        })
    }

    render() {
        const scrollStyle = {
            height: '620px'
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
            <View className='at-article'>
                <View className='at-article__h1'>
                    {this.state.articleItem.title}
                    <AtRate className='isCollection' max={1} value={this.state.value} onChange={this.handleChange} />
                </View>
                <View className='at-article__info'>
                    {this.state.articleItem.time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.articleItem.type}
                </View>
                <View className='at-article__content'>
                    <View className='at-article__section'>

                        <View className='at-article__p'>
                            {/*这里可以将后台传来的html格式的文章内容进行渲染*/}
                            <View dangerouslySetInnerHTML={{ __html: this.state.articleItem.content }}></View>
                        </View>

                        <Image
                            className='at-article__img'
                            src={this.state.articleItem.img}
                            mode='widthFix' />
                    </View>
                </View>
            </View>

        <TabBar tabBarCurrent={1} />

    </ScrollView>

        )
    }
}

export default Index
