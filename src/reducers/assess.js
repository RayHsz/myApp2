const INIT_STATE = {
    questionList:[],
    active:[],
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
            state.active[action.index]=action.num;
            return {
                ...state,
            }
        default:
            return state;
    }
}