import {Component} from "react";
import {ScrollView,View} from "@tarojs/components";
import {AtRate} from "taro-ui";
import './index.scss';
import TabBar from "../../tabBarPage";

class Index extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            value: 1
        }
    }

    handleChange (value) {
        this.setState({
            value
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
                <View className='title'>
                    这是标题
                    <AtRate className='isCollection' max={1} value={this.state.value} onChange={this.handleChange} />
                </View>

                <View className='time'>
                    这是时间
                </View>

                <View className='content'>
                    这是主内容
                </View>

                <TabBar tabBarCurrent={1} />
            </ScrollView>

        )
    }
}

export default Index
