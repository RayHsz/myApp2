import Taro from "@tarojs/taro";

export const findUser = () => {
    return (dispatch) => {
        Taro.request({
            url: 'http://www.localhost:8090/userwx/findAll', //仅为示例，并非真实的接口地址
            data:{
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
