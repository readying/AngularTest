angular.module("docs", [])
    .controller('Controller', ['$scope', function($scope) {
        $scope.name = 'Tobias';
    }])
    .directive('myDialog', function() {
        return {
            restrict: 'EA',
            transclude: true,
            scope: {},
            templateUrl: 'my-dialog.html',
            link: function(scope) {
                scope.name = 'Jeff';
            }
        }
    });