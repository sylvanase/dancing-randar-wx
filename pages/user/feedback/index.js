const app = getApp()

Page({
  data: {
    disabled: true,
    text: ''
  },
  wordCount: function(e) { // 字数统计
    var str = e.detail.value;
    str = str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    if (str.length < 5) {
      this.setData({
        disabled: true
      })
    } else {
      this.setData({
        disabled: false,
        text: str
      })
    }
  },
  submit: function(e) { // 提交反馈
    console.log(this.data.text);
  },
  onLoad: function() {

  }
})