import {Component} from "react";
import {View, Picker} from "@tarojs/components";
import {connect} from "react-redux";
import {AtRate, AtList, AtListItem} from "taro-ui";
import './index.scss'
import Taro from "@tarojs/taro";
import TabBar from "../../tabBarPage";
import {changeSelector, setSelectIndex} from "../../../actions/hospital";

@connect(({hospital}) => ({hospital}), ({changeSelector,setSelectIndex}))
class Index extends Component {
    constructor() {
        super(...arguments)
    }

    next(value,e) {
        this.props.setSelectIndex(value);
        Taro.navigateTo({
            url: 'info/info'
        })
    }

    //选择器调用方法
    onChange = e => {
        this.props.changeSelector(this.props.hospital.selector[e.detail.value]);
    }

    render() {
        const hospitalData = this.props.hospital.data.map((info, index) => {
            return (
                <View onClick={this.next.bind(this,index)}>
                    <image src={info.image} className='listImg'/>
                    <text className='hospitalName'>
                        {info.name}
                    </text>
                    <AtRate
                        className='score'
                        size='15'
                        value={info.score}
                    />
                </View>
            )
        })
        const hotHospital = this.props.hospital.hotHospitalIndex.map((num, index) => {
            return (
                index === 0 ?
                    <View className='leftPart' onClick={this.next.bind(this,num)}>
                        <View className='leftH'>
                            <image src={this.props.hospital.data[num].image} alt="" className='leftImg'/>
                        </View>
                        <View className='leftMs'>
                            {this.props.hospital.data[num].name}
                        </View>
                        <AtRate
                            className='leftStar'
                            size='15'
                            value={this.props.hospital.data[num].score}
                        />
                    </View>
                    :
                    <View className='rightPart' onClick={this.next.bind(this,num)} >
                        <View className='rightH'>
                            <image src={this.props.hospital.data[num].image} alt="" className='rightImg'/>
                        </View>
                        <View className='rightMs'>
                            {this.props.hospital.data[num].name}
                        </View>
                        <AtRate
                            className='rightStar'
                            size='15'
                            value={this.props.hospital.data[num].score}
                        />
                    </View>
            )
        })
        return (
            <View className='index'>
                <View className='header'>医院</View>
                <View>
                    <View className='headDESC'>热门国医堂</View>
                    <View className='hotHospital'>
                        {/*<View className='leftPart' onClick={this.next.bind(this)}>
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
                        </View>*/}
                        {hotHospital}
                    </View>
                    <View className='sort'>
                        <Picker className='picker' mode='selector' range={this.props.hospital.selector}
                                onChange={this.onChange}>
                            <AtList>
                                <AtListItem
                                    title='排序方法'
                                    extraText={this.props.hospital.selectorChecked}
                                />
                            </AtList>
                        </Picker>
                    </View>
                    <View className='hospitalList'>
                        {/*<View>
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
                        </View>*/}
                        {hospitalData}
                    </View>
                </View>
                <TabBar tabBarCurrent={0}/>
            </View>
        );
    }
}

export default Index
