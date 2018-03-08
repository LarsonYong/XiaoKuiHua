//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    movieDetail: {
      "rating": {
        "max": 10,
        "average": 8.5,
        "stars": "45",
        "min": 0
      },
      "reviews_count": 4758,
      "wish_count": 38709,
      "douban_site": "",
      "year": "2018",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514119443.jpg",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514119443.jpg",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514119443.jpg"
      },
      "alt": "https://movie.douban.com/subject/26861685/",
      "id": "26861685",
      "mobile_url": "https://movie.douban.com/subject/26861685/mobile",
      "title": "红海行动",
      "do_count": null,
      "share_url": "https://m.douban.com/movie/subject/26861685",
      "seasons_count": null,
      "schedule_url": "https://movie.douban.com/subject/26861685/cinema/",
      "episodes_count": null,
      "countries": [
        "中国大陆",
        "香港"
      ],
      "genres": [
        "剧情",
        "动作",
        "犯罪"
      ],
      "collect_count": 310972,
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1274761/",
          "avatars": {
            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.jpg",
            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.jpg",
            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.jpg"
          },
          "name": "张译",
          "id": "1274761"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1354442/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458138265.51.jpg",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458138265.51.jpg",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458138265.51.jpg"
          },
          "name": "黄景瑜",
          "id": "1354442"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1272245/",
          "avatars": {
            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49399.jpg",
            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49399.jpg",
            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49399.jpg"
          },
          "name": "海清",
          "id": "1272245"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1322949/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502100680.45.jpg",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502100680.45.jpg",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502100680.45.jpg"
          },
          "name": "杜江",
          "id": "1322949"
        }
      ],
      "current_season": null,
      "original_title": "红海行动",
      "summary": "索马里海域外，中国商船遭遇劫持，船员全数沦为阶下囚。蛟龙突击队沉着应对，潜入商船进行突袭，成功解救全部人质。\n返航途中，非洲北部伊维亚共和国发生政变，恐怖组织连同叛军攻入首都， 当地华侨面临危险，海军战舰接到上级命令改变航向，前往执行撤侨任务。蛟龙突击队八人，整装待发。\n时间紧迫，在“撤侨遇袭可反击，相反则必须避免交火，以免引起外交冲突”的大原则下，海军战舰及蛟龙突击队深入伊维亚，在恶劣的环境之下，借助海陆等多种装备，成功转移等候在码头的中国侨民，并在激烈的遭遇战之后，营救了被恐怖分子追击的中国领事馆巴士。\n然而事情尚未完结，就在掩护华侨撤离之际，蛟龙突击队收到中国人质被恐怖分子劫持的消息。众人深感责任重大，义无反顾地再度展开营救行动。前方路途险恶，蛟龙突击队即将遭遇的，远不止人质营救那么简单,恐怖分子的惊天阴谋即将浮出水面…..",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1275075/",
          "avatars": {
            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372934445.18.jpg",
            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372934445.18.jpg",
            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372934445.18.jpg"
          },
          "name": "林超贤",
          "id": "1275075"
        }
      ],
      "comments_count": 142368,
      "ratings_count": 300095,
      "aka": [
        "刀锋·红海行动",
        "Operation Red Sea"
      ]
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  tap: function(e) {
    var that = this;
    wx.request({
      header: '<meta name=referrer content=never>',
      url: 'https://api.douban.com/v2/movie/subject/26861685',
      success:function(res) {
        console.log("Success!")
        that.setData ( {
        
        })
      }
    })
  },
  tapTemp: function(e) {
    console.log(this.data.movieDetail.rating)
    wx.setStorage({
      key: 'ratt',
      data: this.data.movieDetail.rating,
    })
    // console.log(ratt)
  }
})
