import {Component} from "react";
import { View } from "@tarojs/components";
import './index.scss';
import TabBar from "../../tabBarPage";

class Index extends Component {

    constructor() {
        super(...arguments)
    }

    render() {
        return (
            <View className='index'>
                这是文章页面

                <TabBar tabBarCurrent={1} />
            </View>
        )
    }
}

export default Index