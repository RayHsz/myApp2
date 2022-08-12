const INIT_STATE = {
    loopImgList:[],
}

export default function loopImg(state = INIT_STATE, action) {

    switch (action.type) {
        case 'searchLoopImgList':
            console.log("reducer: ",action.loopImgList.data.data);
            return {
                ...state,
                loopImgList: action.loopImgList.data.data,
            };
        default:
            return state;
    }
}