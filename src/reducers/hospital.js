// 全局属性：redux里面需要共享的数据
import {setHotHospitalList} from "../actions/hospital";

const INIT_STATE = {
    hospitalList: [],
    hotHospitalList: [],
    doctorList: [],
    selector: ['按距离升序', '按距离降序', '按评分升序', '按评分降序'],
    selectorChecked: '',
    selectIndex: '',
    hospitalDistances: [],
}

export default function hospital(previousState = INIT_STATE, action) {

    let {type, hospitalList} = action;

    switch (type) {
        case 'getDoctorList':
            return{
                ...previousState,
                doctorList: action.doctorList.data.data
            }
        case 'findHospital':
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
        case 'setHospitalDistance':
            return{
                ...previousState,
                hospitalDistances:action.hospitalDistances
            }

        case 'searchHospital':
            return {
                ...previousState,
                hospitalList: action.hospitalList
            }

        case 'setHotHospitalList':
            return{
                ...previousState,
                hotHospitalList:action.hotHospitalList

            }
        default:
            return previousState;
    }
}
