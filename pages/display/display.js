// pages/display/display.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Detail: ''
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'movieDetail',
      success: function(res) {
        console.log("Got the movie data")
        console.log(res.data)
        that.setData({
          Detail: res.data
        })
      },
    })
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
  
  },
  clickMore: function (e) {
    console.log("Clicked for more info")
    console.log(e.currentTarget.dataset.hi)
    wx.setStorage({
      key: 'movieID',
      data: e.currentTarget.dataset.hi,
    })
    wx.getStorage({
      key: 'movieID',
      success: function(res) {
        console.log(res)
      },
    })
    console.log('Movie ID stored')
    wx.navigateTo({
      url: '/pages/fulldetail/fulldetail',
    })
  }
})