//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    location: {}, // 当前地理位置
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 链接至首页
  linkToHome: function(e) {
    wx.navigateBack({
      url: '../index/index'
    })
  },
  // 链接至关于我们
  linkToAbout: function(e) {
    wx.navigateTo({
      url: './about/about'
    })
  },
  linkToFeedback: function(e) {
    wx.navigateTo({
      url: './feedback/index'
    })
  },
  linkToEnter: function(e) {
    wx.navigateTo({
      url: './enter/index'
    })
  },
  onLoad: function() {
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      console.log('getuser')
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log(res);
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
})