import {Component} from "react";
import { ScrollView,View,Image,RichText } from "@tarojs/components";
import { AtRate,AtToast } from "taro-ui";
import './index.scss';
import TabBar from "../../../tabBarPage";
import Taro,{useRouter,getCurrentInstance} from "@tarojs/taro";
import '@tarojs/taro/html5.css'
import {connect} from "react-redux";
import {findHospital} from "../../../../actions/hospital";
@connect(({hospital}) => ({hospital}),{findHospital})
class Index extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            value: false,
            articleItem : {},
            result : "default",
            isShow : false
        }
    }

    handleChange = (value) => {
        this.setState({
            value : !this.state.value
        })
        /* 此处写用户点击文章收藏按钮后的事件 */
        Taro.request({
            url: "https://localhost:8090/user/collections",
            data: {
                open_id :this.props.hospital.openid,  //这里的userInfo待定，需要通过接口获取用户的信息
                article_id : this.state.articleItem.id,
                value : !this.state.value  //这里传星星的当前状态过去时，需要取反的原因是在该函数的作用域内setState还没起作用
            },
            header: { 'content-type': 'application/json'}
        }).then(res =>{
            console.log("总体结果=",res)
            console.log("result =" + res.data.result);
            this.setState({
                result : res.data.result,
            })
        })

        //第一次进入延时，把轻提示显示的权限打开
        setTimeout(()=>{
            console.log("进入延时")
            this.setState({
                isShow : true
            })
            //二次延时把'实际上还在原来位置'但是‘已经隐藏起来‘的轻提示给关闭：就是撤掉轻提示在原本位置待的权限
            setTimeout(()=>{
                console.log("延时完毕...")
                this.setState({
                    isShow : false
                })
            },2000) //控制轻提示的时间
        },1000)
    }

    onScrollToUpper() {}
    onScroll(e){ /*console.log(e.detail)*/ }

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

    //消息提示

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
                    {/* 下面是星星 */}
                    <AtToast isOpened={this.state.isShow} text={this.state.result} duration={2000}></AtToast>
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

        <TabBar tabBarCurrent={2} />

    </ScrollView>

        )
    }
}

export default Index
