import {Component} from "react";
import {View,Picker} from "@tarojs/components";
import {connect} from "react-redux";
import {AtRate,AtList, AtListItem} from "taro-ui";
import './index.scss'
import Taro from "@tarojs/taro";
import TabBar from "../../tabBarPage";
import {changeSelector} from "../../../actions/hospital";

@connect(({hospital}) => ({hospital}) , ({changeSelector}))
class Index extends Component {
    constructor () {
        super(...arguments)
    }

    next(value){
        Taro.navigateTo({
            url:'info/info'
        })
    }

    //选择器调用方法
    onChange = e => {
        /*this.setState({
            selectorChecked: this.state.selector[e.detail.value]
        })*/
        this.props.changeSelector(this.props.hospital.selector[e.detail.value]);
    }

    render() {
        let imgsrc1 = this.props.hospital.data[0].image;
        let imgsrc2 = this.props.hospital.data[1].image;
        let imgsrc3 = this.props.hospital.data[2].image;
        let imgsrc4 = this.props.hospital.data[3].image;

        let hotHospital = ['王西章乡卫生院国医堂','西兆通镇卫生院国医堂'];
        let hospitalList = ['裕西社区国医堂','王西章乡卫生院国医堂','高营社区国医堂'];

        let buttonValue = [2,2,3,1,5,4];
        return (
            <View className='index'>
                <View className='header'>医院</View>
                <View>
                    <View className='headDESC'>热门国医堂</View>
                    <View className='hotHospital'>
                        <View className='leftPart' onClick={this.next.bind(this)}>
                            <View className='leftH'>
                                <image src={imgsrc1} alt="" className='leftImg'/>
                            </View>
                            <View className='leftMs'>
                                {hotHospital[0]}
                            </View>
                            <AtRate
                                className='leftStar'
                                size='15'
                                value={buttonValue[0]}
                            />
                        </View>
                        <View className='rightPart'>
                            <View className='rightH'>
                                <image src={imgsrc2} alt="" className='rightImg'/>
                            </View>
                            <View className='rightMs'>
                                {hotHospital[1]}
                            </View>
                            <AtRate
                                className='rightStar'
                                size='15'
                                value={buttonValue[1]}
                            />
                        </View>
                    </View>
                    <View className='sort'>
                        <Picker className='picker' mode='selector' range={this.props.hospital.selector} onChange={this.onChange}>
                            <AtList>
                                <AtListItem
                                    title='排序方法'
                                    extraText={this.props.hospital.selectorChecked}
                                />
                            </AtList>
                        </Picker>
                    </View>
                    <View className='hospitalList'>
                        <View>
                            <image src={imgsrc3} alt="" className='listImg' />
                            <text className='hospitalName'>
                                {hospitalList[0]}
                            </text>
                            <AtRate
                                className='score'
                                size='15'
                                value={buttonValue[2]}
                            />
                        </View>
                        <View>
                            <image src={imgsrc1} alt="" className='listImg' />
                            <text className='hospitalName'>
                                {hospitalList[1]}
                            </text>
                            <AtRate
                                className='score'
                                size='15'
                                value={buttonValue[0]}
                            />
                        </View>
                        <View>
                            <image src={imgsrc4} alt="" className='listImg' />
                            <text className='hospitalName'>
                                {hospitalList[2]}
                            </text>
                            <AtRate
                                className='score'
                                size='15'
                                value={buttonValue[4]}
                            />
                        </View>
                    </View>
                </View>
                <TabBar tabBarCurrent={0} />
            </View>
        );
    }
}

export default Index
