import {Component} from "react";
import {View} from "@tarojs/components";
import './index.scss'
import {AtIcon, AtToast} from "taro-ui"
import TabBar from "../../tabBarPage";




class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            op:true
    }
    }

    opd=()=>{
        console.log("我的")
    }
    render(){
        console.log(this.state.op)
        return (
            <View >
                <AtToast isOpened={this.state.op} text="您没有挂号记录噢~"  onClick={this.opd}></AtToast>
                <TabBar tabBarCurrent={2} />
            </View>

        )
    }
}

export default Index
