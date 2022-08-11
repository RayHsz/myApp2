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
            <View className='a'>
                <button >
                    111
                </button>
                <AtToast isOpened={this.state.op} text="{text}" icon="{icon}" onClick={this.opd}></AtToast>
                <TabBar tabBarCurrent={2} />
            </View>

        )
    }
}

export default Index
