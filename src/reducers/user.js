// 全局属性：redux里面需要共享的数据
const INIT_STATE = {
    hospitalList: [],
    doctorList: [],
    selectorChecked: '',
    selectIndex: '',
    hospitalDistances: [],
    openid:"",
    avatar:"",
    gender:"",
    nickname:"",
}

export default function user(previousState = INIT_STATE, action) {

    let {type, hospitalList} = action;

    switch (type) {
        case 'searchHospital':
            console.log("reducer: ",hospitalList.data.data);
            return {
                ...previousState,
                hospitalList: hospitalList.data.data
            };
        default:
            return previousState;
    }
}