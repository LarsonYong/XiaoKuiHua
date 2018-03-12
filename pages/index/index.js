var sliderWidth = 96;
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    tabs: ["搜索", "热映中", "即将上映"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    requestUrl: '',
    resData: ''
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  searchSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var that = this
    var title = escape(encodeURIComponent(e.detail.value))
    var url = 'http://localhost:4205/api/search/' + title
    var resData = ''
    console.log(url)
    wx.request({
      url: url,
      method: 'GET',
      header: {
        "content-type": 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(res.data.subjects[0])
        that.setData ({
          resData: res.data.subjects
        })
        
        console.log(resData)
      }
    })
  }
});