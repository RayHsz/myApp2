import Taro from "@tarojs/taro";
import {connect} from "react-redux";


export const findUser = (openid) => {
    return (dispatch) => {
        Taro.request({
            url: 'http://www.localhost:8090/userwx/findAll', //仅为示例，并非真实的接口地址
            data:{
                id:openid
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                // 调reducer修改数据
                console.log("action执行")
                dispatch({type: 'findUser', hospitalList: res})
            }
        })
    }
}

export const findResult = (openid) => {
    return (dispatch) => {
        Taro.request({
            url: 'http://www.localhost:8090/userwx/findresult', //仅为示例，并非真实的接口地址
            data:{
                openid:openid
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                // 调reducer修改数据
                console.log("action执行")
                dispatch({type: 'findResult', hospitalList: res})
            }
        })
    }
}

export const findNick=()=>{
    return(dispatch)=>{
        wx.getUserInfo({
            //成功后会返回
            success:function (res){
                console.log("返回的用户为"+res.userInfo.nickName);
                // 把你的用户信息存到一个变量中方便下面使用
                // let userInfo= res.userInfo
                dispatch({type: 'findNick', nickName: res.userInfo.nickName,avatar:res.userInfo.avatarUrl})
                // this.setState({
                //     nickname:userInfo.nickName,
                //     avatar:userInfo.avatarUrl,
                // })
                //获取openId（需要code来换取）这是用户的唯一标识符
                // 获取code值
                // let avatar= userInfo.avatarUrl
                // let nickname=userInfo.nickName
                // this.props.user.avatar=avatar
                // this.props.user.nickname=nickname

            }
        })

    }
}

export const findCode=()=>{
    return(dispatch)=>{
        wx.login({
            //成功放回
            success:(res)=> {
                console.log(res.code);
                dispatch({type: 'findCode', code: res.code})
                // 通过code换取openId
                // console.log("转化获得的"+this.state.openid);
                // setTimeout(()=>{
                //     console.log("测试是否已经传进去数值："+this.props.user.openid)
                // },1000)
            }
        })
    }
}

export const findOpenid=(code)=>{
    return(dispatch)=>{
        Taro.request({
            // url: 'https://www.fastmock.site/mock/4ea260afef1e26407be34bf87c61cdf7/login/loginIP', //仅为示例，并非真实的接口地址
            url: 'http://localhost:8090/userwx/getopenid',//仅为示例，并非真实的接口地址
            data: {
                code:code
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success:(res)=> {
                dispatch({type: 'findOpenid', openid: res.data.openid})
                // 通过code换取openId
                // console.log("转化获得的"+this.state.openid);
                // setTimeout(()=>{
                //     console.log("测试是否已经传进去数值："+this.props.user.openid)
                // },1000)
            }
        })
    }
}


export const create=(id,avatar)=>{
    return()=>{
        Taro.request({
            // url: 'https://www.fastmock.site/mock/4ea260afef1e26407be34bf87c61cdf7/login/loginIP', //仅为示例，并非真实的接口地址
            url: 'http://localhost:8090/userwx/create',//仅为示例，并非真实的接口地址
            data: {
                id:id,
                avatar:avatar
            },
            header: {
                'content-type': 'application/json' // 默认值
            }
        })
    }}
// .then(res => {
//             console.log("请求结果=",res.data.openid);
//             let openid1= res.data.openid
//             this.props.user.openid=res.data.openid
//             console.log("传递的",openid1);
//
//             //     .then(res=>{
//             //         setTimeout(()=>{
//             //             console.log("测试是否已经传进去数值："+this.props.user.openid)
//             //         },1000)
//             //     }
//             // )
//         })
//     }
// })


export const finddata = () => {
    return (dispatch) => {
        Taro.request({
            url: 'http://localhost:8090/getAllList', //仅为示例，并非真实的接口地址
            data: {},
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                // 调reducer修改数据
                console.log("action执行")
                dispatch({type: 'searchdata', List: res.data.data})
            }
        })
    }
}