import {Component} from "react";
import {View} from "@tarojs/components";
import {connect} from "react-redux";
import {findHospital} from "../../actions/hospital";
import './index.scss'




@connect(({hospital}) => ({hospital}), {findHospital})
class Index extends Component {
    render() {
        return (
            <View className=''>

            </View>
        )
    }
}

export default Index
