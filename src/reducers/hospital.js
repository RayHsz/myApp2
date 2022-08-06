// 全局属性：redux里面需要共享的数据
const INIT_STATE = {
    hospitalList: [],
    selector: ['按距离升序', '按距离降序', '按评分升序', '按评分降序'],
    selectorChecked: '',
    hotHospitalIndex: [1,3],
    data: [
        {
            name: '王西章乡卫生院国医堂',
            image:'http://116.205.177.247:8080/images/hotHospital-left.jpg',
            score: 2,
            address: '石家庄市赵县王西章乡王西章村北',
            phone: 84935120,
            DInf : [
                {
                    name: '马海霞',
                    position: '执业医师',
                    skill: '月经病类',
                    inquiryNum: 0,
                    synopsis:'萨的痕迹爱哦是滴哦安徽省肯定会刷卡机的后方可SDK粉红色客户方开始大口喝水空间的和福克斯的'
                },
                {
                    name: '司丽彩',
                    position: '助理医师',
                    skill: '眩晕病',
                    inquiryNum: 1,
                    synopsis:'爱上的喀什卡卡是否会卡号首付款黄寺大街看风寒咳嗽电话客服沙雕'
                }
            ]
        },
        {
            name: '西兆通镇卫生院国医堂',
            image:'http://116.205.177.247:8080/images/hotHospital-right.jpg',
            score: 3,
            address: '石家庄市赵县王西章乡王西章村东南',
            phone: 85301053,
            DInf : [
                {
                    name: '王远征',
                    position: '主治医师',
                    skill: '',
                    inquiryNum: 2,
                    synopsis:'的九分裤老师讲的飞廉说建档立卡福建省来看待极乐世界'
                },
                {
                    name: '孙兴',
                    position: '主治医师',
                    skill: '',
                    inquiryNum: 3,
                    synopsis:'撒东航飞机卡号是大富科技安徽会计师东方航空十多块'
                }
            ]
        },
        {
            name: '裕西社区国医堂',
            image:'http://116.205.177.247:8080/images/yuxishequ.jpg',
            score: 4,
            address: '石家庄市赵县王西章乡王西章村东西南北',
            phone: 87898584,
            DInf : [
                {
                    name: '周某',
                    position: '主治医师',
                    skill: '胃痛、咳嗽',
                    inquiryNum: 2,
                    synopsis:'适得府君书的几十年的成，处女， 新城， 吗'
                },
                {
                    name: '伊某',
                    position: '主治医师',
                    skill: '反胃',
                    inquiryNum: 3,
                    synopsis:'在线程你们，新城， 新城，VN，你'
                }
            ]
        },
        {
            name: '高营社区国医堂',
            image:'http://116.205.177.247:8080/images/gaoyingshequ.jpg',
            score: 4,
            address: '石家庄市赵县王西章乡王西章村东南西北风',
            phone: 85243976,
            DInf : [
                {
                    name: '何某某',
                    position: '主治医师',
                    skill: '暂无',
                    inquiryNum: 2,
                    synopsis:'身份水电费沙雕发是多彩V型词表'
                },
                {
                    name: '刘某某',
                    position: '主治医师',
                    skill: '暂无',
                    inquiryNum: 3,
                    synopsis:'如果大法官大法官吃不吃VB'
                }
            ]
        }
    ],
    selectIndex: '',
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
            return {
                ...previousState,
                selectorChecked: action.selectorChecked
            }
        case 'getSelectIndex':
            return{
                ...previousState,
                selectIndex:action.selectIndex
            }
        default:
            return previousState;
    }
}
