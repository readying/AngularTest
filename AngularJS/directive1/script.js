angular.module("docsTemplate", [])
    .controller('Controller', ['$scope', function($scope) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Beijing'
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