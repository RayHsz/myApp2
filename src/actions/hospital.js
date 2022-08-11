import Taro from "@tarojs/taro";

export const findHospital = () => {
    return (dispatch) => {
        Taro.request({
            url: 'https://www.fastmock.site/mock/3eba8f22893363427fb080b0c20d7b42/weapp/getHospitalList', //仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
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

export const getDoctorList = () => {
    return (dispatch) => {
        Taro.request({
            url: 'https://www.fastmock.site/mock/3eba8f22893363427fb080b0c20d7b42/weapp/getDoctorList', //仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                dispatch({type: 'getDoctorList', doctorList: res})
            }
        })
    }
}