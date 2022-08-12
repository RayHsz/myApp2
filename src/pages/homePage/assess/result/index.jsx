import {Component} from "react";
import {Image, ScrollView, View} from "@tarojs/components";
import './index.scss'
import {AtAccordion, AtList, AtListItem} from 'taro-ui'

class index extends Component{
    constructor () {
        super(...arguments)
        this.state = {
            open: false,
        }
    }
    handleClick (value) {
        this.setState({
            open: value
        })
    }
    render() {
        return(
            <View className='index'>
                <View className='header'>
                    <View className='title'>
                        您的体质为：
                    </View>
                    <View className='physique1'>
                        是
                    </View>
                    <View className='physique3'>
                        倾向是
                    </View>
                    <View className='physique2'>
                        平和质
                    </View>
                    <View className='physique3'>
                        痰湿质
                    </View>
                    <View className='performance'>
                        主要表现：面色、肤色润泽，头发较密，目光有神，
                        不易疲劳，精力充沛，耐受寒热，睡眠良好，胃纳佳，
                        二便正常，舌色淡红、苔薄白，脉和缓有力
                    </View>
                </View>
                <View className='opinion'>
                    指导意见：
                </View>
                <AtAccordion
                    className='item'
                    open={this.state.open}
                    onClick={this.handleClick.bind(this)}
                    title='情志调摄'
                >
                    <AtList hasBorder={false}>
                        <AtListItem
                            title='标题文字'
                            arrow='right'
                            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                        />
                        <AtListItem
                            title='标题文字'
                            note='描述信息'
                            arrow='right'
                            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                        />
                        <AtListItem
                            title='标题文字'
                            note='描述信息'
                            extraText='详细信息'
                            arrow='right'
                            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                        />
                    </AtList>
                </AtAccordion>
                <AtAccordion
                    className='item'
                    open={false}

                    title='情志调摄'
                >
                    <AtList hasBorder={false}>
                        <AtListItem
                            title='标题文字'
                            arrow='right'
                            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                        />
                        <AtListItem
                            title='标题文字'
                            note='描述信息'
                            arrow='right'
                            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                        />
                        <AtListItem
                            title='标题文字'
                            note='描述信息'
                            extraText='详细信息'
                            arrow='right'
                            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                        />
                    </AtList>
                </AtAccordion>
                {/*<AtAccordion*/}
                {/*    className='item'*/}
                {/*    open={false}*/}
                {/*    onClick={this.handleClick.bind(this)}*/}
                {/*    title='饮食调养'*/}
                {/*>*/}
                {/*    <View className='text'>*/}
                {/*        人体的生命活动随着年节律、季节律、月节律、昼夜节律等自然规律而发生相应的生理变化。故《灵枢·本神》强调:“故智者之养生也，必顺四时而适寒暑，和喜怒而安居处，节阴阳而调刚柔，如是则邪僻不至，长生久视”。即使是阴阳和调之人一也要起居有常，不妄作劳，顺应四时，悉心调护，才能增进健康，延年益寿。*/}
                {/*    </View>*/}
                {/*</AtAccordion>*/}
                {/*<AtAccordion*/}
                {/*    className='item'*/}
                {/*    open={false}*/}
                {/*    onClick={this.handleClick.bind(this)}*/}
                {/*    title='起居调摄'*/}
                {/*>*/}
                {/*    <View className='text'>*/}
                {/*        人体的生命活动随着年节律、季节律、月节律、昼夜节律等自然规律而发生相应的生理变化。故《灵枢·本神》强调:“故智者之养生也，必顺四时而适寒暑，和喜怒而安居处，节阴阳而调刚柔，如是则邪僻不至，长生久视”。即使是阴阳和调之人一也要起居有常，不妄作劳，顺应四时，悉心调护，才能增进健康，延年益寿。*/}
                {/*    </View>*/}
                {/*</AtAccordion>*/}
                {/*<AtAccordion*/}
                {/*    className='item'*/}
                {/*    open={false}*/}
                {/*    onClick={this.handleClick.bind(this)}*/}
                {/*    title='运动保健'*/}
                {/*>*/}
                {/*    <View className='text'>*/}
                {/*        人体的生命活动随着年节律、季节律、月节律、昼夜节律等自然规律而发生相应的生理变化。故《灵枢·本神》强调:“故智者之养生也，必顺四时而适寒暑，和喜怒而安居处，节阴阳而调刚柔，如是则邪僻不至，长生久视”。即使是阴阳和调之人一也要起居有常，不妄作劳，顺应四时，悉心调护，才能增进健康，延年益寿。*/}
                {/*    </View>*/}
                {/*</AtAccordion>*/}
                {/*<AtAccordion*/}
                {/*    className='item'*/}
                {/*    open={false}*/}
                {/*    onClick={this.handleClick.bind(this)}*/}
                {/*    title='穴位保健'*/}
                {/*>*/}
                {/*    <View className='text'>*/}
                {/*        人体的生命活动随着年节律、季节律、月节律、昼夜节律等自然规律而发生相应的生理变化。故《灵枢·本神》强调:“故智者之养生也，必顺四时而适寒暑，和喜怒而安居处，节阴阳而调刚柔，如是则邪僻不至，长生久视”。即使是阴阳和调之人一也要起居有常，不妄作劳，顺应四时，悉心调护，才能增进健康，延年益寿。*/}
                {/*    </View>*/}
                {/*</AtAccordion>*/}
            </View>
        )
    }
}

export default index