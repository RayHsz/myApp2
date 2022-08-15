// 全局属性：redux里面需要共享的数据
const INIT_STATE = {
    hospitalList: [],
    doctorList: [],
    selectorChecked: '',
    selectIndex: '',
    openid:"",
    avatar:"",
    gender:"",
    nickname:'',
    resultList:[],
    nickList:[],
    code:""
}

export default function user(previousState = INIT_STATE, action) {


    switch (action.type) {
        case 'findUser':
            console.log("reducer: ",action.hospitalList.data.data);
            return {
                ...previousState,
                hospitalList: action.hospitalList.data.data
            }
        case 'findResult':
            console.log("reducer: ",action.hospitalList.data.data);
            return {
                ...previousState,
                resultList: action.hospitalList.data.data
            }
        case 'findNick':
            console.log("reducer: ",action.nickName);
            return {
                ...previousState,
                nickname:action.nickName,
                avatar:action.avatar
            }
        case 'findCode':
            console.log("这里的code为: ",action.code);
            return {
                ...previousState,
                code:action.code
            }
        case 'findOpenid':
            console.log("这里的openid为: ",action.openid);
            console.log("这里的hospitalList为: ",previousState.hospitalList[0]);
            return {
                ...previousState,
                openid:action.openid
            }
        default:
            return previousState;
    }
}