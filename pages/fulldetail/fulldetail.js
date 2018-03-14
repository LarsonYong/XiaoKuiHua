// pages/fulldetail/fulldetail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieFullDetail:{},
    Requested: 0,
    

  },
  globalData:{
    movieID: null
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
    var movieID = ''
    var movieFullDetail = ""
    wx.getStorage({
      key: 'movieID',
      success: function (res) {
        console.log("Get movie ID")
        movieID = res.data
        console.log(movieID)
        var url = 'http://98.207.91.15:81/api/movie/' + movieID
        console.log(movieID)
        console.log(url)
        wx.request({
          url: url,
          method: 'GET',
          success: function (res) {
            console.log("Success")
            
            console.log(movieFullDetail)
            that.setData({
              movieFullDetail : res.data,
              Requested : 1
            })
          }
        },
        )
      },
    })
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