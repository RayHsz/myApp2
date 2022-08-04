
const INIT_STATE = {
    current: 0,
    dateSel:'2022-8-2',
    checkedList:['list4'],
    active:true
}

export default function aiGuidance(previousState = INIT_STATE, action){

    let {type,active} = action;

    switch (type) {
        case 'turnSex':
            console.log("reducer: ",active);
            return {
                ...previousState,
                active:active
            };
        default:
            return previousState;
    }
}