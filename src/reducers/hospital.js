// 全局属性：redux里面需要共享的数据
import {setHotHospitalList} from "../actions/hospital";

const INIT_STATE = {
    hospitalList: [],
    hotHospitalList: [],
    doctorList: [],
    programList: [],
    oneProgramList: {},
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
        case 'getProgram':
            return{
                ...previousState,
                programList: action.programList.data.data
            }
        case 'oneProgram':
            return{
                ...previousState,
                oneProgramList: action.programList
            }
        case 'findHospital':
            console.log("hospitalList",hospitalList);
            console.log("action.hotHospitalList",action.hotHospitalList);
            return {
                ...previousState,
                hospitalList: hospitalList,
                hotHospitalList:action.hotHospitalList
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
                hospitalList: action.hospitalList.data.data
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
