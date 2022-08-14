export default defineAppConfig({
  pages: [
    'pages/homePage/index/index',
    'pages/homePage/information/index',
    'pages/homePage/assess/start/index',
    'pages/homePage/assess/assessing/index',
    'pages/homePage/assess/result/index',
    'pages/homePage/aiGuidance/step1/index',
    'pages/homePage/aiGuidance/step2/step2',
    'pages/homePage/aiGuidance/step3/step3',
    'pages/homePage/hospital/index',
    'pages/homePage/hospital/info/info',
    'pages/homePage/hospital/synopsis/synopsis',
    'pages/homePage/reservationService/index',
    'pages/homePage/reservationService/programinfo/pinfo',
    'pages/healthInformation/index',
    'pages/healthInformation/article/index',
    'pages/myInformation/mainInformation/index',
    'pages/myInformation/userInformation/index',
    'pages/myInformation/myCollection/index',
    'pages/myInformation/myRegistration/index',
    'pages/myInformation/effectEvaluation/index',
    'pages/myInformation/identificationRecords/index',
    'pages/myInformation/myCollection/article/index',
    'pages/myInformation/addpatient/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
    }
  }

})
