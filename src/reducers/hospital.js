// 全局属性：redux里面需要共享的数据
const INIT_STATE = {
    hospitalList: [],
    selector: ['按距离升序', '按距离降序', '按评分升序', '按评分降序'],
    selectorChecked: '',
}

export default function hospital(previousState = INIT_STATE, action) {

    let {type, hospitalList} = action;

    switch (type) {
        case 'searchHospital':
            console.log("reducer: ", hospitalList.data.data);
            return {
                ...previousState,
                hospitalList: hospitalList.data.data
            };
        case 'changeSelector':
            console.log("action:", action);
            return {
                ...previousState,
                selectorChecked: action.selectorChecked
            }
        default:
            return previousState;
    }
}
