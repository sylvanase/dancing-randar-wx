//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    id: '舞房id',
    phoneNumber: '12306',
    name: '',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },
  // 拨打电话
  makeCall: function() {
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber,
      success: (res) => {
        // 接口调用成功
        console.log(res)
      },
      fail: (res) => {
        // 接口调用失败
      },
      complete: (res) => {
        // 接口调用完成
      }
    })
  },
  // 导航
  gps: function() {

  },
  onLoad: function(options) {
    this.setData({
      id: options.id
    })
    this.getDetail();

  },
  getDetail: function(e) {
    console.log(e)
    // 获取舞房信息
    wx.request({
      url: app.globalData.baseUrl + '/api?id=' + this.data.id,
      success: result => {
        console.log(JSON.stringify(result.data));
        if (!result.data || !result.data.data) {
          return;
        }
        if (result.data.status == 50004) {
          if (result.data.data.redpacket_amount == 0) {
            result.data.data.redpacket_amount = null
          }
          if (result.data.data.redpacket_number == 0) {
            result.data.data.redpacket_number = null
          }
          this.setData({
            packet: result.data.data,
          })
        }
      }
    })
  }
})