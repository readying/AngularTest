angular.module("docs", [])
    .controller('NaomiController', ['$scope', function($scope) {
        $scope.customer = {
            name: 'Naomis',
            address: '1600 Beijing'
        }
    }])
    .controller('IgorController', ['$scope', function($scope) {
        $scope.customer = {
            name: 'Igor',
            address: '123 Shanghai'
        }
    }])
    .directive('myCustomer', function() {
        // return {
        //     templateUrl: function(elem, attr) {
        //         return 'customer-' + attr.type + '.html'
        //     }
        // };
        return {
            restrict: 'EA',
            templateUrl: 'my-customer.html'
        }
    });