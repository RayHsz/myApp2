const INIT_STATE = {
    questionList:[],
    active:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    num:0
}

export default function assess(state = INIT_STATE, action) {

    switch (action.type) {
        case 'searchQuestion':
            console.log("reducer: ",action.questionList.data.data);
            return {
                ...state,
                questionList: action.questionList.data.data,
            };
        case 'chooseAnswer':
            state.active.splice(action.index,1,action.num)
            return {
                ...state,
            }
        case 'getAssessNum':
            return {
                ...state,
                num: action.num
            }
        default:
            return state;
    }
}