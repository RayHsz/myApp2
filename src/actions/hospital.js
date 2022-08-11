import Taro from "@tarojs/taro";

export const findHospital = () => {
    return (dispatch) => {
        Taro.request({
            // url: 'https://www.fastmock.site/mock/4ea260afef1e26407be34bf87c61cdf7/login/loginIP', //仅为示例，并非真实的接口地址
            url: 'http://localhost:8090/userwx/findAll', //仅为示例，并非真实的接口地址
            data: {
                id:"oL7Uf5p-bXzCsxpUr5Efu7-KqEo0"
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                // 调reducer修改数据
                console.log("action执行")
                dispatch({type: 'searchHospital', hospitalList: res})
            }
        })
    }
}

export const changeSelector = (value) => {
    return (dispatch) => {
        dispatch({type: 'changeSelector', selectorChecked: value})
    }
}

export const setSelectIndex = (value) => {
    return (dispatch) => {
        dispatch({type: 'setSelectIndex', selectIndex: value})
    }
}