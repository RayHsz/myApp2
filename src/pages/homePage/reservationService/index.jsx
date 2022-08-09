import {Component} from "react";
import {Image, View,ScrollView} from "@tarojs/components";
import {connect} from "react-redux";
import {findHospital,setSelectIndex} from '../../../actions/hospital'
import './index.scss'
import Taro from "@tarojs/taro";
import {AtSearchBar, AtAccordion, AtList, AtListItem, AtRate} from 'taro-ui'





@connect(({hospital}) => ({hospital}), ({findHospital,setSelectIndex}))
class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            value: '',
            open:false,
            hosDisMap:new Map()
        }
    }

    SearchBar=(value)=>{
        this.setState({
            value: value
        })
    }
    handleClick=(value)=> {
        this.setState({
            open: value
        })
    }
    hospitalInformation=(value)=>{
        this.props.setSelectIndex(value);
        Taro.navigateTo({
            url: '/pages/homePage/hospital/info/info'
        })
    }

    render() {
        const hospitalData=this.props.hospital.data.map((info,index)=>
            {
                return (
                    <View className='hospital' onClick={this.hospitalInformation.bind(this,index)}>
                        <Image src={info.image} className='hospitalPhoto'/>
                        <View><text>{info.name}</text></View>
                        <AtRate value={info.score}/>
                        <View><text>剩余量:{info.remainder}</text></View>
                    </View>
                )
            }
        )
        return (
            <View className='index'>
                <AtSearchBar className='SearchBar' value={this.state.value} onChange={this.SearchBar.bind(this)}/>
                <View className='filterBox'>
                <View className='type'><text>医院:</text></View>
                <View className='filter'>
                    <AtAccordion className='atAccordion'
                    open={this.state.open}
                    onClick={this.handleClick.bind(this)}
                    title='筛选'
                    >
                    <AtList hasBorder={false}>
                        <AtListItem
                            title='评分'
                            arrow='right'
                            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                        />
                        <AtListItem
                            title='剩余量'
                            arrow='right'
                            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                        />
                    </AtList>
                </AtAccordion>
                </View>
                <ScrollView className='hospitalList'>
                    {hospitalData}
                </ScrollView>
                </View>
            </View>
        )
    }
}

export default Index