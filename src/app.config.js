export default defineAppConfig({
  pages: [
    'pages/homePage/index/index',
    'pages/homePage/aiGuidance/step1/index',
    'pages/homePage/aiGuidance/step2/step2',
    'pages/homePage/aiGuidance/step3/step3',
    'pages/homePage/hospital/index',
    'pages/homePage/hospital/info/info',
    'pages/healthInformation/index',
    'pages/myInformation/mainInformation/index',
    'pages/myInformation/userInformation/index',
    'pages/myInformation/myCollection/index',
    'pages/myInformation/myRegistration/index',
    'pages/myInformation/effectEvaluation/index',
    'pages/myInformation/identificationRecords/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },

})
