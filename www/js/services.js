angular.module('starter.services', [])

.factory('Types', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var types = [{
    name: '母婴童装',
    subTypes: [
      {name: '奶粉', products: [
        {name: "惠氏1段", imgUrl: "assets/seckill_1.jpg"},
        {name: "惠氏2段", imgUrl: "assets/seckill_2.jpg"},
        {name: "惠氏3段", imgUrl: "assets/seckill_3.jpg"}
      ]},

      {name: "尿布", products: [
        {name: "大王L", imgUrl: "assets/seckill_4.jpg"},
        {name: "大王XL", imgUrl: "assets/seckill_5.jpg"},
        {name: "大王XXL", imgUrl: "assets/seckill_6.jpg"}
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
  }, {
    name: '家用电器',
    subTypes: [
      {name: '手机', products: [
        {name: "小米", imgUrl: ""}
      ]},

      {name: "电脑", products: [
        {name: "ThinkPad", imgUrl: ""}
      ]}
    ]
  }, {
    name: '潮流女装',
    subTypes: [
      {name: '手机', products: [
        {name: "小米", imgUrl: ""}
      ]},

      {name: "电脑", products: [
        {name: "ThinkPad", imgUrl: ""}
      ]}
    ]
  }, {
    name: '食品生鲜',
    subTypes: [
      {name: '手机', products: [
        {name: "小米", imgUrl: ""}
      ]},

      {name: "电脑", products: [
        {name: "ThinkPad", imgUrl: ""}
      ]}
    ]
  }, {
    name: '品牌男孩',
    subTypes: [
      {name: '手机', products: [
        {name: "小米", imgUrl: ""}
      ]},

      {name: "电脑", products: [
        {name: "ThinkPad", imgUrl: ""}
      ]}
    ]
  }, {
    name: '居家生活',
    subTypes: [
      {name: '手机', products: [
        {name: "小米", imgUrl: ""}
      ]},

      {name: "电脑", products: [
        {name: "ThinkPad", imgUrl: ""}
      ]}
    ]
  }, {
    name: '酒水饮料',
    subTypes: [
      {name: '手机', products: [
        {name: "小米", imgUrl: ""}
      ]},

      {name: "电脑", products: [
        {name: "ThinkPad", imgUrl: ""}
      ]}
    ]
  }, {
    name: '家具建材',
    subTypes: [
      {name: '手机', products: [
        {name: "小米", imgUrl: ""}
      ]},

      {name: "电脑", products: [
        {name: "ThinkPad", imgUrl: ""}
      ]}
    ]
  }, {
    name: '钟表珠宝',
    subTypes: [
      {name: '手机', products: [
        {name: "小米", imgUrl: ""}
      ]},

      {name: "电脑", products: [
        {name: "ThinkPad", imgUrl: ""}
      ]}
    ]
  }, {
    name: '玩具乐器',
    subTypes: [
      {name: '手机', products: [
        {name: "小米", imgUrl: ""}
      ]},

      {name: "电脑", products: [
        {name: "ThinkPad", imgUrl: ""}
      ]}
    ]
  }, {
    name: '内衣配饰',
    subTypes: [
      {name: '手机', products: [
        {name: "小米", imgUrl: ""}
      ]},

      {name: "电脑", products: [
        {name: "ThinkPad", imgUrl: ""}
      ]}
    ]
  }, {
    name: '汽车用品',
    subTypes: [
      {name: '手机', products: [
        {name: "小米", imgUrl: ""}
      ]},

      {name: "电脑", products: [
        {name: "ThinkPad", imgUrl: ""}
      ]}
    ]
  }, {
    name: '音像制品',
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
