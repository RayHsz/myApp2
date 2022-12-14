export const onChangeActive = () => {
    return (dispatch) => {
        dispatch({type: 'turnSex', active: true})
    }
}
export const onChangeDate = (date) => {
    return (dispatch) => {
        dispatch({type: 'changeDate', dateSel: date})
    }
}
export const onChangeCurrent = (num) => {
    return (dispatch) => {
        dispatch({type: 'changeCurrent', current: num})
    }
}

export const onChangeCheckedList = (value,string) => {
    return (dispatch) => {
        dispatch({type: 'changeCheckedList', checkedList: value, title: string})
    }
}

export const turnPrepare = () => {
    return (dispatch) => {
        dispatch({type: 'turnPrepare'})
    }
}