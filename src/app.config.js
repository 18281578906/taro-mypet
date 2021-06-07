export default {
  pages: [
    'pages/index/index',
    'pages/forumPage/index',
    'pages/servicePage/index',
    'pages/homePage/index',
    'pages/forumPage/addMessage/index',
  ],
  tabBar: {
    color: "#a9b7b7",
    selectedColor: "#11cd6e",
    // borderStyle: 'white', 
    backgroundColor: "#ffffff",
    list: [{
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './image/home.png',
        selectedIconPath: './image/home-hover.png'
      },
      {
        pagePath: 'pages/forumPage/index',
        text: '论坛',
        iconPath: './image/forum.png',
        selectedIconPath: './image/forum-hover.png'
      },
      {
        pagePath: 'pages/servicePage/index',
        text: '服务',
        iconPath: './image/service.png',
        selectedIconPath: './image/service-hover.png'
      },
      {
        pagePath: 'pages/homePage/index',
        text: '我的',
        iconPath: './image/index.png',
        selectedIconPath: './image/index-hover.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
    //自定义导航
    // navigationStyle: 'custom',
    // backgroundTextStyle: 'light',
    // navigationBarBackgroundColor: '#fff',
  },

}
