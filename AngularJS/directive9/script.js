var app = angular.module("app", []);
app.controller('Controller', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'Tobias';
    $scope.message = '';
    $scope.hideDialog = function(message) {
        $scope.message = message;
        $scope.dialogIsHidden = true;
        $timeout(function() {
            $scope.message = '';
            $scope.dialogIsHidden = false;

        }, 2000);
    }
}])
app.directive('nameCheck', nameCheck);

nameCheck.$inject = ['HttpService', '$q'];

function nameCheck(HttpService, $q) {

    var NAME_REG = /^[a-zA-Z\u4e00-\u9fa5]+$/;
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function($scope, element, attrs, ctrl) {
            ctrl.$validators.char = function(modelValue, viewValue) {
                var value = modelValue || viewValue;
                if (!NAME_REG.test(value)) {
                    return false;
                }
                return true;
            }
        }
    }
};

app.factory('HttpService', HttpService);

function HttpService($q) {
    var users = ['aaa', 'bbb', 'ccc'];
    return {
        get: function(url) {
            var deferred = $q.defer(),
                res = {};
            var user = url.split('/').revserse()[0];
            if (users.indexOf(user) != -1) {
                res.isExist = true;
            } else {
                res.isExist = false;
            }
            deferred.resolve(res);
            return deferred.promise;
        }
    }
}