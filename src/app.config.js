export default defineAppConfig({
  pages: [
    'pages/homePage/index',
    'pages/healthInformation/index',
    'pages/myInformation/mainInformation/index',
    'pages/myInformation/userInformation/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "custom": false,
    "color": "#696969",
    "iconColor": "#696969",
    "selectedColor": "#228B22",
    "backgroundColor": "#DCDCDC",
    "list": [
      {
        "pagePath": 'pages/homePage/index',
        "iconPath": "images/home.png",
        "text": "首页",
        "selectedIconPath": "images/homeSD.png",
      },
      {
        "pagePath": 'pages/healthInformation/index',
        "iconPath": "images/myConsult.png",
        "text": "健康资讯",
        "selectedIconPath": "images/myConsultSD.png",
      },
      {
        "pagePath": "pages/myInformation/mainInformation/index",
        "iconPath": "images/home.png",
        "text": "我的",
        "selectedIconPath": "images/homeSD.png",
      },
    ]
  }
})
