//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    article_list:[
      {
        "picture":"/image/python1.jpg",
        "title":"python3天成大神",
        "description":"python是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。",
        "time":"1997-11-06"
      },
      {
        "picture": "/image/python2.jpg",
        "title": "python3周成大神",
        "description": "python是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。",
        "time": "1997-11-06"
      },
      {
        "picture": "/image/python3.jpg",
        "title": "python3月成大神",
        "description": "python是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。",
        "time": "1997-11-06"
      },
    ]
  }
})
/*{//app()必须在app.js中调用，必须调用且只能调用一次.不然会出现无法预期的后果
  "pages": [//app是全局配置
    "pages/index/index",
    "pages/logs/logs",
    "pages/list/list"
  ],
  "window": {//windows窗口
    "backgroundTextStyle": "light",
    //下拉loading的样式，仅支持dark深色的，黑暗的/light光亮的
    "navigationBarBackgroundColor": "#000",//导航栏背景颜色；navigation导航
    "navigationBarTitleText": "天主极乐大帝",//导航栏标题文件内容
    "navigationBarTextStyle": "white"//导航栏标题颜色
  },
  "tabBar":{//tabBar组件，类似下图的效果//页面底部
    "color":"#666666",
    "backgroundColor":"#000000",//底部背景颜色
    "selectedColor":"#E53A40",//被选中后的字体颜色
    "list":[{
      "text":"首页",
      "pagePath":"pages/index/index",
      "iconPath":"/image/persion_select.png",
      "selectedIconPath":"/image/persion.png"//被选中后的图片
    },
      {
    "text": "列表页",
    "pagePath": "pages/list/list",
    "iconPath": "/image/persion_select.png",
    "selectedIconPath": "/image/persion.png"
      },
    {
      "text": "日志",
      "pagePath": "pages/logs/logs",
      "iconPath": "/image/persion_select.png",
      "selectedIconPath": "/image/persion.png"
    }]
  },
  "sitemapLocation": "sitemap.json"
}//sitemap网站地图，location位置*/