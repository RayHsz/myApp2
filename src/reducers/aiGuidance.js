
const INIT_STATE = {
    dateSel:'2022-8-2',
    checkedList:[],
    active:true,
    title:'请选择不适症状'
}

const prepareState =INIT_STATE;

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
        case 'changeCheckedList':
            return {
                ...state,
                checkedList: action.checkedList,
                title: action.title
            }
        case 'turnPrepare':
            return {
                ...state,
                dateSel: prepareState.dateSel,
                checkedList: prepareState.checkedList,
                active: prepareState.active,
                title: prepareState.title
            }
        default:
            return state
    }
}