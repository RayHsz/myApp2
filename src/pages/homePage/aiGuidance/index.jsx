import {Component} from "react";
import {View} from "@tarojs/components";
import './index.scss';

class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <View className='index'>
                <View className='header'>
                    <text className='pageName'>智能导诊</text>
                </View>
            </View>
        )
    }
}

export default Index