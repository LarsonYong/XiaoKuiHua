// pages/comingSoon/comingSoon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: {},
    gotResult: 0
  },
  gotoDisplay: function (e) {
    console.log(e.currentTarget.dataset.hi)
    wx.setStorage({
      key: 'movieID',
      data: e.currentTarget.dataset.hi,
    }),
      console.log('Movie ID stored')
    wx.navigateTo({
      url: '/pages/fulldetail/fulldetail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    var gotResult = 0
    var movieList = ""
    var movieArray = []
    var movieArray2 = []
    wx.request({
      url: 'http://98.207.91.15:81/api/coming_soon',
      method: 'GET',
      success: function (res) {
        console.log("Success")
        console.log(res.data)
        console.log(movieList)
        that.setData({
          movieList: res.data,
          gotResult: 1
        })
        for (var x in res.data.subjects) {
          movieArray.push(res.data.subjects[x])
          console.log(res.data.subjects[x])
        }
        that.setData({
          movieArray2: movieArray
        })
        console.log(movieArray)
      }
    },
    )
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})