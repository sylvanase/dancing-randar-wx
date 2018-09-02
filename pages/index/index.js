//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    location: {}, // 当前地理位置
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 链接至舞房详情页
  linkToDetail: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../room/detail/index?id=' + id
    })
  },
  // 链接至个人中心
  linkToUser: function(e) {
    wx.navigateTo({
      url: '../user/index'
    })
  },
  onLoad: function() {

  }
})