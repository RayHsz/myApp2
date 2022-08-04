import {Component} from "react";
import {View,Picker} from "@tarojs/components";
import {connect} from "react-redux";
import {AtRate,AtList, AtListItem} from "taro-ui";
import './index.scss'
import {findHospital} from "../../../actions/hospital";
import Taro from "@tarojs/taro";

@connect(({hospital}) => ({hospital}), {findHospital})
class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            selector: ['按距离升序', '按距离降序', '按评分升序', '按评分降序'],
        }
    }

    next(){
        Taro.navigateTo({
            url:'info/info'
        }).then(res=>{
            console.log(res);
        })
    }

    //选择器调用方法
    onChange = e => {
        this.setState({
            selectorChecked: this.state.selector[e.detail.value]
        })
    }

    render() {
        let imgsrc1 = "http://116.205.177.247:8080/images/hotHospital-left.jpg";
        let imgsrc2 = "http://116.205.177.247:8080/images/hotHospital-right.jpg";

        let imgsrc3 = "http://116.205.177.247:8080/images/yuxishequ.jpg";
        let imgsrc4 = "http://116.205.177.247:8080/images/gaoyingshequ.jpg";

        let buttonValue = [2,2,3,1,5,4];
        return (
            <View className='index'>
                <View className='header'>医院</View>
                <View>
                    <View className='headDESC'>热门国医堂</View>
                    <View className='hotHospital'>
                        <View className='leftPart' onClick={this.next}>
                            <View className='leftH'>
                                <image src={imgsrc1} alt="" className='leftImg'/>
                            </View>
                            <View className='leftMs'>
                                王西章乡卫生院国医堂
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
                                西兆通镇卫生院国医堂
                            </View>
                            <AtRate
                                className='rightStar'
                                size='15'
                                value={buttonValue[1]}
                            />
                        </View>
                    </View>
                    <View className='sort'>
                        <Picker className='picker' mode='selector' range={this.state.selector} onChange={this.onChange}>
                            <AtList>
                                <AtListItem
                                    title='排序方法'
                                    extraText={this.state.selectorChecked}
                                />
                            </AtList>
                        </Picker>
                    </View>
                    <View className='hospitalList'>
                        <View>
                            <image src={imgsrc3} alt="" className='listImg' />
                            <text className='hospitalName'>
                                裕西社区国医堂
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
                                王西章乡卫生院国医堂
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
                                高营社区国医堂
                            </text>
                            <AtRate
                                className='score'
                                size='15'
                                value={buttonValue[4]}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Index
