var docs = angular.module("app2", ['ngMessages']);
docs
    .controller('Controller', ['$scope', function($scope) {
        $scope.format = 'M/d/yy h:mm:ss a';
        $scope.username = "hh";
    }])
    .directive('blacklist', function() {
        return {
            require: 'ngModel',
            link: function(scope, elem, attr, ngModel) {
                var blacklist = attr.blacklist.split(',');

                ngModel.$parsers.unshift(function(value) {
                    var valid = blacklist.indexOf(value) === -1;

                    ngModel.$setValidity('blacklist', valid);
                    return valid ? value : undefined;
                });

                ngModel.$formatters.unshift(function(value) {
                    ngModel.$setValidity('blacklist', blacklist.indexOf(value) === -1);
                    return value;
                })
            }
        }
    })
    .directive('checkname', function($http) {

        var NAME_REG = /^[a-zA-Z\u4e00-\u9fa5]{2,10}$/;
        var users = {};
        $http({
            method: 'GET',
            url: './data'
        }).then(function(resp) {

            users = resp.data.split(',');

        })
        return {
            scope: {
                user: '=user'
            },
            require: 'ngModel',
            link: function(scope, elem, attr, ngModel) {

                ngModel.$parsers.unshift(function(modelValue, viewValue) {
                    var value = modelValue || viewValue;
                    var test = user;
                    var valid2 = NAME_REG.test(value);
                    var valid = users.indexOf(value) === -1;
                    ngModel.$setValidity('username', valid);
                    return valid ? value : undefined;
                })
            }
        }
    })