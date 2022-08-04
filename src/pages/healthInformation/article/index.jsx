import {Component} from "react";
import {ScrollView,View,Image} from "@tarojs/components";
import {AtRate} from "taro-ui";
import './index.scss';
import TabBar from "../../tabBarPage";

class Index extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            value: false
        }
    }

    handleChange = (value) => {
        this.setState({
            value : !this.state.value
        })
    }

    onScrollToUpper() {}

    onScroll(e){
        //console.log(e.detail)
    }

    render() {
        const scrollStyle = {
            height: '445px'
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
                    这是一级标题这是一级标题
                    <AtRate className='isCollection' max={1} value={this.state.value} onChange={this.handleChange} />
                </View>
                <View className='at-article__info'>
                    2017-05-07&nbsp;&nbsp;&nbsp;这是作者
                </View>
                <View className='at-article__content'>
                    <View className='at-article__section'>
                        <View className='at-article__h2'>这是二级标题</View>
                        <View className='at-article__h3'>这是三级标题</View>
                        <View className='at-article__p'>
                            这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        </View>
                        <View className='at-article__p'>
                            这是文本段落。这是文本段落。
                        </View>
                        <Image
                            className='at-article__img'
                            src='https://jdc.jd.com/img/400x400'
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
