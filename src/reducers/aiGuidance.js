
const INIT_STATE = {
    current: 0,
    dateSel:'2022-8-2',
    checkedList:['list4'],
    active:true
}

export default function aiGuidance(state = INIT_STATE, action){

    switch (action.type) {
        case 'turnSex':
            return {
                ...state,
                active:!state.active
            };
        case 'changeDate':
            return{
                ...state,
                dateSel: action.dateSel
            }
        case 'changeCurrent':
            return {
                ...state,
                current: action.current
            }
        case 'changeCheckedList':
            return {
                ...state,
                checkedList: action.checkedList
            }
        default:
            return state
    }
}