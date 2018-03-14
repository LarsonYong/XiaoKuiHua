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
    resData: '',
    searched: 0,
    gotResult: 0
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
    var that = this
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    console.log(e.currentTarget.id)
    if (e.currentTarget.id == 1) {
      that.setData ({
        resData: {}
      })
      wx.navigateTo({
        url: '../inTheathers/inTheathers',
      })
    }
    if (e.currentTarget.id == 2) {
      that.setData({
        resData: {}
      })
      wx.navigateTo({
        url: '../comingSoon/comingSoon',
      })
    }
  },
  searchSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var that = this
    that.setData ({
      searched: 1,
      gotResult: 0,
      resData: {}
    })
    var title = escape(encodeURIComponent(e.detail.value))
    var url = 'http://98.207.91.15:81/api/search/' + title
    var resData = ''
    console.log(url)
    wx.request({
      url: url,
      method: 'GET',
      header: {
        "content-type": 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(res.data.subjects)
        that.setData ({
          resData: res.data.subjects,
          gotResult:1
        })
        console.log(resData)
      },
      fail: function(e) {
        console.log(e)
        that.setData({
          gotResult: 2
        })
      }
    })
  },
  clickMovieDetail: function(e) {
    console.log('Click for movie detail')
    console.log(e.currentTarget.dataset.hi)
    wx.navigateTo({
      url: '../display/display',
    })
    wx.setStorage({
      key: 'movieDetail',
      data: e.currentTarget.dataset.hi,
    })
    wx.getStorage({
      key: 'movieDetail',
      success: function(res) {
        console.log('Success')
        console.log(res)
      },
      fail: function(res) {
        console.log("Fail")
        console.log(res)
      }
    })
  },
  navInThea: function(res) {
    wx.navigateTo({
      url: 'pages/inTheathers/inTheathers',
    })
  }
  
});