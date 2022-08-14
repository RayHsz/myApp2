import {Component} from "react";
import './pinfo.scss'
import Taro, {getCurrentInstance} from "@tarojs/taro";
import {Image, View,ScrollView} from "@tarojs/components";
import {connect} from "react-redux";
import {theOneProgram} from "../../../../actions/hospital";

@connect(({hospital}) => ({hospital}),{theOneProgram})
class pinfo extends Component {

    constructor () {
        super(...arguments)
        this.state = {
            pid:"0",
            programInfo:{}
        }
    }

    $instance = getCurrentInstance()
    componentWillMount () {
        let data = JSON.parse(decodeURIComponent(this.$instance.router.params.data));
        this.setState({ programInfo:data});
        console.log(data);
    }
    render() {
        return(
            <ScrollView>
                <View>{this.state.programInfo.name}</View>
                <View>这里是配图</View>
                <View>项目介绍:{this.state.programInfo.content}</View>
            </ScrollView>
        )
    }
}
export default pinfo