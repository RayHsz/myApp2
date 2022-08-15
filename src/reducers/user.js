// 全局属性：redux里面需要共享的数据
const INIT_STATE = {
    hospitalList: [],
    doctorList: [],
    selectorChecked: '',
    selectIndex: '',
    openid:"",
    avatar:"",
    gender:"",
    nickname:"",
    resultList:[],
    nickList:[],
    code:''
}

export default function user(previousState = INIT_STATE, action) {

    let {type, hospitalList} = action;

    switch (type) {
        case 'findUser':
            console.log("reducer: ",hospitalList.data.data);
            return {
                ...previousState,
                hospitalList: hospitalList.data.data
            };
        case 'findResult':
            console.log("reducer: ",hospitalList.data.data);
            return {
                ...previousState,
                resultList: hospitalList.data.data
            };
        case 'findNick':
            console.log("reducer: ",action.nickName);
            return {
                ...previousState,
                nickname:action.nickName,
                avatar:action.avatar
            };
        case 'findCode':
            console.log("reducer: ",action.code);
            return {
                ...previousState,
                code:action.code
            };
        case 'findOpenid':
            console.log("reducer: ",action.openid);
            return {
                ...previousState,
                openid:action.openid
            }
        default:
            return previousState;
    }
}