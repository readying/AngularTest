/**
 * Created by Administrator on 2017/4/14.
 */

var app = angular.module('demo', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/menu');
    $stateProvider
        .state('Menu', {
            url:'/menu',
             // template: '<h1>My Contacts</h1>'
            templateUrl:'menu.html'
        })

        .state('NgRepeat',{
            url:'/ngRepeat',
            templateUrl:'ngRepeat.html',
            controller:'ngRepeatCtrl'
        })
        .state('NgRepeat.list',{
            url:'/list',
            templateUrl:'list.html'
        })
}]);

app.controller('ngRepeatCtrl',['$scope', function ($scope) {
    $scope.data = 34;
}]);