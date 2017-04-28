/**
 * Created by Administrator on 2017/4/26.
 */

var myModule = angular.module('MyModule',[]);
myModule.controller('MyCtrl',['$scope', function ($scope) {
    $scope.ctrlFlavor = "BaiWei";
}]);
//  @ 将scope里面的值传递到指令中
myModule.directive('drink', function () {
    return{
        restrict:'AE',
        scope:{
            flavor:'@'
        },
        template:'<div>{{flavor}}</div>'
        // ,
        // link:function (scope, element, attrs) {
        //     scope.flavor = attrs.flavor;
        // }
    }
});

myModule.directive('drink2', function () {
    return{
        restrict:'AE',
        scope:{
            flavor:'='
        },
        template:'<input type="text" ng-model="flavor" />'
    }
});
















