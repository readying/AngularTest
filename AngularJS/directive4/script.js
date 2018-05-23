angular.module("docs", [])
    .controller('Controller', ['$scope', function($scope) {
        $scope.naomi = {
            name: 'Naomis',
            address: '1600 Beijing'
        }
        $scope.vojta = {
            name: 'igor',
            address: '1600 Shanghai'
        }
    }])
    .directive('myCustomer', function() {
        return {
            restrict: 'EA',
            scope: {
                customerInfo: '=>info'
            },
            templateUrl: 'my-customer-plus.html'
        }
    });