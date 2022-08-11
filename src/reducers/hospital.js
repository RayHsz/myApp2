// 全局属性：redux里面需要共享的数据
const INIT_STATE = {
    hospitalList: [],
    doctorList: [],
    selector: ['按名字升序', '按名字降序', '按评分升序', '按评分降序'],
    selectorChecked: '',
    selectIndex: '',
}

export default function hospital(previousState = INIT_STATE, action) {

    let {type, hospitalList} = action;

    switch (type) {
        case 'getDoctorList':
            return{
                ...previousState,
                doctorList: action.doctorList.data.data
            }
        case 'searchHospital':
            return {
                ...previousState,
                hospitalList: hospitalList.data.data
            };
        case 'changeSelector':
            return {
                ...previousState,
                selectorChecked: action.selectorChecked
            }
        case 'setSelectIndex':
            return{
                ...previousState,
                selectIndex:action.selectIndex
            }
        default:
            return previousState;
    }
}
