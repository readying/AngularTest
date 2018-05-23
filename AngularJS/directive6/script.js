var docs = angular.module("docs", ['ngMessages']);
docs
    .controller('Controller', ['$scope', function($scope) {
        $scope.format = 'M/d/yy h:mm:ss a';
    }])
    .directive('myCurrentUsername', ['$http', 'HttpService', function($http, HttpService) {


        function link(scope, element, attrs, ctrl) {
            var username, timeoutId;

            var NAME_REG = /^[a-zA-Z\u4e00-\u9fa5]{3,10}$/;

            function updateTime() {
                element.text(dataFilter(new Date(), format));
            }

            ctrl.$validators.char = function(modelValue, viewValue) {
                var value = modelValue || viewValue;
                if (!NAME_REG.test(value)) {
                    return false;
                }
                return true;
            }

            // scope.$watch(attrs.myCurrentUsername, function(value) {
            //     HttpService.get('/' + value).then(function(resp) {
            //         if (resp.isExist) {
            //             alert('ok');
            //         } else {
            //             alert('false');
            //         }
            //     })
            // });
            element.on('$destory', function() {
                // $interval.cancel(timeoutId);
            });

            // timeoutId = $interval(function() {
            //     updateTime();
            // }, 1000);
        }

        return {
            require: 'ngModel',
            link: link
        }
    }]);