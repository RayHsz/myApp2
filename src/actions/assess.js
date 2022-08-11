import Taro from "@tarojs/taro";

export const findQuestion = () => {
    return (dispatch) => {
        Taro.request({
            url: 'https://www.fastmock.site/mock/66348f13dffdc89cf145a2805d60c0ae/mock/assess/findAll',
            data: {},
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                // 调reducer修改数据
                dispatch({type: 'searchQuestion', questionList: res})
            }
        })
    }
}

export const onChangeActive=(index,num)=>{
    return (dispatch)=>{
        dispatch({type: 'chooseAnswer', index:index,num:num})
    }
}