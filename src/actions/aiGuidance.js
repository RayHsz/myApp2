export const onChangeActive = (active) => {
    return (dispatch) => {
        dispatch({type: 'turnSex', active:!active})
    }
}