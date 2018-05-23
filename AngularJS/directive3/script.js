angular.module("docs", [])
    .controller('NaomiController', ['$scope', function($scope) {
        $scope.naomi = {
            name: 'Naomis',
            address: '1600 Beijing'
        }
        $scope.igor = {
            name: 'igor',
            address: '1600 Shanghai'
        }
    }])
    .directive('myCustomer', function() {
        return {
            restrict: 'EA',
            scope: {
                customerInfo: '='
            },
            templateUrl: 'my-customer-iso.html'
        }
    });