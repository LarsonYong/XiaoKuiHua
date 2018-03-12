// pages/display/display.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetail2: { "rating": { "max": 10, "average": 6.9, "stars": "35", "min": 0 }, "reviews_count": 159, "wish_count": 36078, "douban_site": "", "year": "2018", "images": { "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2512123434.jpg", "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2512123434.jpg", "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2512123434.jpg" }, "alt": "https:\/\/movie.douban.com\/subject\/6390825\/", "id": "6390825", "mobile_url": "https:\/\/movie.douban.com\/subject\/6390825\/mobile", "title": "\u9ed1\u8c79", "do_count": null, "share_url": "https:\/\/m.douban.com\/movie\/subject\/6390825", "seasons_count": null, "schedule_url": "https:\/\/movie.douban.com\/subject\/6390825\/cinema\/", "episodes_count": null, "countries": ["\u7f8e\u56fd"], "genres": ["\u52a8\u4f5c", "\u79d1\u5e7b", "\u5192\u9669"], "collect_count": 9753, "casts": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1327680\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1518765586.91.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1518765586.91.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1518765586.91.jpg" }, "name": "\u67e5\u5fb7\u7ef4\u514b\u00b7\u535a\u65af\u66fc", "id": "1327680" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1334862\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1385433474.91.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1385433474.91.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1385433474.91.jpg" }, "name": "\u9732\u76ae\u5854\u00b7\u5c3c\u6c38\u5965", "id": "1334862" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1107320\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1398492835.92.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1398492835.92.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1398492835.92.jpg" }, "name": "\u8fc8\u514b\u5c14\u00b7B\u00b7\u4e54\u4e39", "id": "1107320" }, { "alt": "https:\/\/movie.douban.com\/celebrity\/1308787\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44231.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44231.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p44231.jpg" }, "name": "\u4e39\u5a1c\u00b7\u594e\u91cc\u62c9", "id": "1308787" }], "current_season": null, "original_title": "Black Panther", "summary": "\u5728\u6f2b\u5a01\u5f71\u4e1a\u7684\u5f71\u7247\u300a\u9ed1\u8c79\u300b\u4e2d\uff0c\u7279\u67e5\u62c9\u5728\u5176\u7236\u4eb2\u2014\u2014\u524d\u74e6\u574e\u8fbe\u56fd\u738b\u53bb\u4e16\u4e4b\u540e\uff0c\u56de\u5230\u4e86\u8fd9\u4e2a\u79d1\u6280\u5148\u8fdb\u4f46\u4e0e\u4e16\u9694\u7edd\u7684\u975e\u6d32\u56fd\u5bb6\uff0c\u7ee7\u4efb\u6210\u4e3a\u65b0\u4e00\u4efb\u201c\u9ed1\u8c79\u201d\u53ca\u56fd\u738b\u3002\u5f53\u65e7\u654c\u91cd\u73b0\u65f6\uff0c\u4f5c\u4e3a\u201c\u9ed1\u8c79\u201d\u53ca\u56fd\u738b\u7684\u7279\u67e5\u62c9\u8eab\u9677\u4e24\u96be\u5883\u5730\uff0c\u773c\u770b\u7740\u74e6\u574e\u8fbe\u53ca\u5168\u4e16\u754c\u9677\u4e8e\u5371\u96be\u4e4b\u4e2d\u3002\u9762\u5bf9\u80cc\u53db\u4e0e\u5371\u9669\uff0c\u8fd9\u4f4d\u5e74\u8f7b\u7684\u56fd\u738b\u5fc5\u987b\u8054\u5408\u540c\u76df\uff0c \u91ca\u653e\u201c\u9ed1\u8c79\u201d\u5168\u90e8\u529b\u91cf\uff0c\u594b\u529b\u634d\u536b\u4ed6\u7684\u4eba\u6c11\u548c\u56fd\u571f\u3002", "subtype": "movie", "directors": [{ "alt": "https:\/\/movie.douban.com\/celebrity\/1326531\/", "avatars": { "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/pPjZDSsF679kcel_avatar_uploaded1359524956.71.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/pPjZDSsF679kcel_avatar_uploaded1359524956.71.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/pPjZDSsF679kcel_avatar_uploaded1359524956.71.jpg" }, "name": "\u745e\u6069\u00b7\u5e93\u683c\u52d2", "id": "1326531" }], "comments_count": 4448, "ratings_count": 9082, "aka": [] },
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