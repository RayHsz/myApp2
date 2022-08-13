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

export const setHospitalDistance = (value) =>{
    return (dispatch) => {
        dispatch({type: 'setHospitalDistance', hospitalDistances: value})
    }
}

export const sortHospitalDistance = (hospitalList,hospitalDistances,select) => {
    return (dispatch) => {
        hospitalDistances.map((distance,index) => {
            for (let i = 1 ; i < hospitalDistances.length - index ; i++){
                if (select === '0' && hospitalDistances[i-1]>hospitalDistances[i] || select === '1' && hospitalDistances[i-1]<hospitalDistances[i]){
                    let exchange = hospitalDistances[i-1];
                    hospitalDistances[i-1] = hospitalDistances[i];
                    hospitalDistances[i] = exchange;

                    let temp = hospitalList[i - 1];
                    hospitalList[i - 1] = hospitalList[i];
                    hospitalList[i] = temp;
                }
            }
        })
        dispatch({
            type: 'sortHospitalDistance',
            hospitalList: hospitalList,
            hospitalDistances:hospitalDistances
        })
    }
}