angular.module('starter.services', [])

.factory('Types', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var types = [{
    name: '母婴童装',
    subTypes: [
      {name: '奶粉', products: [
        {name: "惠氏1段", imgUrl: ""},
        {name: "惠氏2段", imgUrl: ""},
        {name: "惠氏3段", imgUrl: ""}
      ]},

      {name: "尿布", products: [
        {name: "大王L", imgUrl: ""},
        {name: "大王XL", imgUrl: ""},
        {name: "大王XXL", imgUrl: ""}
      ]}
    ]

  }, {
    name: '图书',
    subTypes: [
      {name: '英语读物', products: [
        {name: "了不起的盖茨比", imgUrl: ""},
        {name: "迪士尼大电影", imgUrl: ""},
        {name: "傲慢与偏见", imgUrl: ""}
      ]},

      {name: "绘本", products: [
        {name: "不一样的卡梅拉", imgUrl: ""},
        {name: "小王子", imgUrl: ""},
        {name: "小熊宝宝", imgUrl: ""}
      ]}
    ]

  }, {
    name: '个护化妆',
    subTypes: [
      {name: '化妆1', products: [
        {name: "化妆品1", imgUrl: ""}
      ]},

      {name: "化妆2", products: [
        {name: "化妆品2", imgUrl: ""}
      ]}
    ]

  }, {
    name: '手机数码',
    subTypes: [
      {name: '手机', products: [
        {name: "小米", imgUrl: ""}
      ]},

      {name: "电脑", products: [
        {name: "ThinkPad", imgUrl: ""}
      ]}
    ]

  }];

  return {
    all: function() {
      return types;
    }
  };
});
