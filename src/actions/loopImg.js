import Taro from "@tarojs/taro";

export const findLoopImg = () => {
    return (dispatch) => {
        Taro.request({
            url: 'https://www.fastmock.site/mock/66348f13dffdc89cf145a2805d60c0ae/mock/getCarousel',
            data: {},
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                // 调reducer修改数据
                console.log('action:'+res)
                dispatch({type: 'searchLoopImgList', loopImgList: res})
            }
        })
    }
}