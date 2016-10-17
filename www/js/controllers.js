angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
    $scope.seckillList = [
      {imgUrl: "../assets/seckill_1.jpg", price: 56},
      {imgUrl: "../assets/seckill_2.jpg", price: 2343},
      {imgUrl: "../assets/seckill_3.jpg", price: 1002},
      {imgUrl: "../assets/seckill_4.jpg", price: 563},
      {imgUrl: "../assets/seckill_5.jpg", price: 88},
      {imgUrl: "../assets/seckill_6.jpg", price: 225}
    ];

    $scope.seckillWidth = $scope.seckillList.length * 90 + "px";

  })

  .controller('SeckillCtrl', function($scope) {
    $scope.seckillList = [
      {imgUrl: "../assets/seckill_1.jpg", price: 56, title: "Product1", sold: "20"},
      {imgUrl: "../assets/seckill_2.jpg", price: 2343, title: "Product2", sold: "70"},
      {imgUrl: "../assets/seckill_3.jpg", price: 1002, title: "Product3", sold: "80"},
      {imgUrl: "../assets/seckill_4.jpg", price: 563, title: "Product4", sold: "40"},
      {imgUrl: "../assets/seckill_5.jpg", price: 88, title: "Product5", sold: "30"},
      {imgUrl: "../assets/seckill_6.jpg", price: 225, title: "Product6", sold: "50"}
    ];
  })

  .controller('ProductDetailTabsCtrl', function($scope) {

    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
    });
    $scope.seckillList = [
      {imgUrl: "../assets/seckill_1.jpg", price: 56, title: "Product1", sold: "20"},
      {imgUrl: "../assets/seckill_2.jpg", price: 2343, title: "Product2", sold: "70"},
      {imgUrl: "../assets/seckill_3.jpg", price: 1002, title: "Product3", sold: "80"},
      {imgUrl: "../assets/seckill_4.jpg", price: 563, title: "Product4", sold: "40"},
      {imgUrl: "../assets/seckill_5.jpg", price: 88, title: "Product5", sold: "30"},
      {imgUrl: "../assets/seckill_6.jpg", price: 225, title: "Product6", sold: "50"}
    ];
  })

    .controller('ProductCtrl', function($scope, $stateParams) {
      $scope.productDetail = true;

      $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
      });

      $scope.productName = $stateParams.productName;

    })
  .controller('ProductDescCtrl', function($scope, $stateParams) {
    $scope.productDesc = true;

    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
    });

    $scope.productName = $stateParams.productName;

  })
  .controller('ProductCommentCtrl', function($scope, $stateParams) {
    $scope.productComment = true;

    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
    });

    $scope.productName = $stateParams.productName;

  })

.controller('TypesCtrl', function($scope, Types) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});


    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
    });

    $scope.types = Types.all();

    $scope.curType;

    $scope.onTypeClick = function (typeInfo) {
      $scope.curType = typeInfo;

    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
