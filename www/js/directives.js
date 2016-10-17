angular.module('starter.directives', [])

.directive('seckillProBrief', [function(){
    return {
      link: function(scope, element, attr){

      },
      scope: {
        imgUrl: "=",
        price: "="
      },
      restrict: 'E',
      replace: true,
      templateUrl: "templates/seckill-pro-brief-directive.html"
    }
  }]);
