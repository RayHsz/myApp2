import {Component} from "react";
import {ScrollView, View} from "@tarojs/components";
import {connect} from "react-redux";
import './index.scss';
import {AtList, AtListItem, AtSearchBar} from 'taro-ui';
import {Swiper, SwiperItem} from '@tarojs/components';
import Taro from "@tarojs/taro";
import TabBar from "../../tabBarPage";
import {AtGrid} from "taro-ui"
import {findLoopImg} from "../../../actions/loopImg";

@connect(({loopImg}) => ({loopImg}), {findLoopImg})
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleList:[]
        }
    }

    componentWillMount(){
        this.props.findLoopImg();
    }

    onChange(value) {
        this.setState({
            //value: value
        })
    }

    changePage = (value,index) =>{
        if (index === 0){
            this.goToHospital();
        }else if (index === 2){
            this.goToAIGuidance();
        }
    }
    goToHospital = () => {
        Taro.navigateTo({
            url: '../hospital/index'
        })
    }
    goToAIGuidance = () => {
        Taro.navigateTo({
            url: '../aiGuidance/step1/index'
        })
    }
    goToInformation=()=>{
        Taro.navigateTo({
            url: '../information/index'
        })
    }
    goToAssess=()=>{
        Taro.navigateTo({
            url: '../assess/start/index'
        })
    }

    /*  文章滚动槽 */
    onScrollToUpper() {}
    onScroll(e){
        //console.log(e.detail)
    }
    //点击文章跳转事件
    toArticle (item) {
        let data = JSON.stringify(item) //首先对获取到的item进行JSON格式化
        Taro.navigateTo({
            //跳转到文章页面，并将当前的文章id传到文章页面，方便文章页面的操作
            url: '../../healthInformation/article/index?data='+ `${encodeURIComponent(data)}`  //对JSON对象进行编码后传递
        })
    }
    getArticleList=()=>{
        Taro.request({
            // url: 'https://www.fastmock.site/mock/04d7d10ca66bca7861c545d7cf2ed1ca/aricle/getAllArticle',  //mock地址
            url: 'http://localhost:8090/aricle/getAllArticle',
            data: {},
            header: { 'content-type': 'application/json'}
        }).then(res =>{
            //console.log("请求结果=",res.data.data);
            console.log("生命周期，钩子函数，初次请求文章结果 =",res);
            this.setState({
                // articleList : res.data.data  //mock数据格式
                articleList : res.data
            })
        })
    }
    /*生命周期，钩子函数*/
    componentDidMount() {
        this.getArticleList()
    }

    /* 点击《更多》跳转到健康资讯页面 */
    toHealthInformationPage=()=>{
        Taro.navigateTo({
            //跳转到文章页面
            url: '../../healthInformation/index'
        })
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
            let rawTitle = item.title  //原本还带有html格式的标题 ： rawTitle
            let rawContent = item.content  //原本还带有html格式的内容 ： rawContent

            /* 去除富文本中的html标签 */
            /* *、+限定符都是贪婪的，因为它们会尽可能多的匹配文字，只有在它们的后面加上一个?就可以实现非贪婪或最小匹配。*/
            let title = rawTitle.replace(/<.+?>/g, '');
            let content = rawContent.replace(/<.+?>/g, '');
            //console.log("1.去除html标签 = ",title);
            //console.log("1.去除html标签 = ",rawContent);

            /* 去除&nbsp; */
            title = title.replace(/&nbsp;/ig, '');
            content = content.replace(/&nbsp;/ig, '');
            //console.log("2.去除&nbsp; = ",title);
            //console.log("2.去除&nbsp; = ",content);

            /* 去除空格 */
            title = title.replace(/\s/ig, '');
            content = content.replace(/\s/ig, '');
            //console.log("3.去除空格 = ",title);
            //console.log("3.去除空格 = ",content);
            return(
                <AtListItem
                    onClick= {() =>this.toArticle(item)}  //在onClick事件传参的时候，只要写成箭头函数的方式，就不会被立即执行
                    title= {title}
                    note= {content.substr(0,44)+"..."}  //文章内容
                    arrow= "top"
                    extraText= {item.time.substr(0,10)}  //文章时间
                    thumb= {item.img}
                />
            )
        })  //遍历文章列表
        return (
            <View className='index'>
                <View className='at-search-bar'>
                    <AtSearchBar
                        //value={this.state.value}
                        onChange={this.onChange.bind(this)}
                        placeholder={'搜索国医堂'}
                        //onActionClick={this.onActionClick.bind(this)}
                    />
                </View>
                <View className='rotationPicture'>
                    <Swiper
                        className='test-h'
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        circular
                        indicatorDots
                        interval={1000}
                        autoplay='true'>
                        {
                            this.props.loopImg.loopImgList.map((loopImg, index) => {
                                return (
                                    <SwiperItem>
                                        <View className='demo-text-1'>
                                            <image
                                                src={loopImg.url}>
                                            </image>
                                        </View>
                                    </SwiperItem>
                                )
                            })
                        }

                        {/*<SwiperItem>*/}
                        {/*    <View className='demo-text-2'>*/}
                        {/*        <image*/}
                        {/*            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg8.iqilu.com%2Fksdimgs%2F2017%2F11%2F12%2F0735a5f0dab7687c418944bb393f980f.jpg&refer=http%3A%2F%2Fimg8.iqilu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661840518&t=cba649418605d11f24e8d30872ae33c4">*/}
                        {/*        </image>*/}
                        {/*    </View>*/}
                        {/*</SwiperItem>*/}
                        {/*<SwiperItem>*/}
                        {/*    <View className='demo-text-3'>*/}
                        {/*        <image*/}
                        {/*            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ouxunsi.com%2Fupload%2Feditor%2F201911%2F2019111415183742328.jpg&refer=http%3A%2F%2Fwww.ouxunsi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661840518&t=6ea814a24e9bb8ce266ef00f0f348cd6">*/}
                        {/*        </image>*/}
                        {/*    </View>*/}
                        {/*</SwiperItem>*/}
                    </Swiper>
                </View>
                <View className='action'>
                    {/*<View className='at-button' onClick={this.goToHospital}>*/}
                    {/*    <image className='img' src='http://106.12.158.62:8080/img/guoyitang.jpg'></image>*/}
                    {/*    <text className='title'>国医堂</text>*/}
                    {/*</View>*/}
                    {/*<View className='at-button'>*/}
                    {/*    <image className='img' src='http://106.12.158.62:8080/img/yuyuefuwu.png'></image>*/}
                    {/*    <text className='title'>预约服务</text>*/}
                    {/*</View>*/}
                    {/*<View className='at-button' onClick={this.goToAIGuidance}>*/}
                    {/*    <image className='img' src='http://106.12.158.62:8080/img/zhinnengdaozhen.png'></image>*/}
                    {/*    <text className='title'>智能导诊</text>*/}
                    {/*</View>*/}
                    <AtGrid
                        onClick={this.changePage}
                        data={
                        [
                            {
                                image: 'http://106.12.158.62:8080/img/guoyitang.jpg',
                                value: '国医堂'
                            },
                            {
                                image: 'http://106.12.158.62:8080/img/yuyuefuwu.png',
                                value: '预约服务'
                            },
                            {
                                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                                value: '智能导诊'
                            }
                        ]
                    }/>
                </View>
                <View className='center'>
                    <View className='center-text-view' onClick={this.goToInformation}>
                        <text className='center-text1'>
                            中医健康管理
                        </text>
                        <text className='center-text2'>
                            知识宣教
                        </text>
                    </View>
                    <View className='center-child' onClick={this.goToAssess}>
                        <text className='center-child-text1'>
                            【体质辨识】
                        </text>
                        <text className='center-child-text2'>
                            判定量表
                        </text>
                    </View>
                </View>

                <AtList>
                    <AtListItem
                        title='健康资讯'
                        note=''
                        extraText='更多'
                        arrow='right'
                        thumb='https://preview.qiantucdn.com/58pic/44/00/63/22R58PICXvJgazxwTqe6t_PIC2018.png!qt324_nowater_jpg'
                        onClick={this.toHealthInformationPage}
                    />
                </AtList>

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

                <TabBar tabBarCurrent={0}/>
            </View>
        )
    }
}

export default Index
