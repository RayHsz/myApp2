import Taro from "@tarojs/taro";

export const findHospital = () => {
    return (dispatch) => {
        Taro.request({
            url: 'http://www.localhost:8090/hospital/getHospitalList', //仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                dispatch({type: 'findHospital', hospitalList: res})
            }
        })
    }
}

export const getProgramList = () => {
    return (dispatch) => {
        Taro.request({
            url: 'http://www.localhost:8090/program/getProgramList', //仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                dispatch({type: 'getProgram', programList: res})
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
            url: 'http://www.localhost:8090/doctor/getDoctorMsg', //仅为示例，并非真实的接口地址
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



export const searchHospital =(name)=>{
    console.log('mingzi'+name);
    return (dispatch) => {
        Taro.request({
            url: 'http://www.localhost:8090/hospital/search', //仅为示例，并非真实的接口地址
            data:{
                name:name,
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                dispatch({type: 'searchHospital', hospitalList: res})
            }
        })
    }
}



    export const setHotHospitalList = (value) => {
        return (dispatch) => {
            dispatch({type: 'setHotHospitalList', hotHospitalList: value})

        }
}
    export const theOneProgram = (value) =>{
        return (dispatch) =>{
            dispatch({type:'oneProgram',oneProgramList:value})
        }
    }

