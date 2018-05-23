angular.module("docs", [])
    .controller('Controller', ['$scope', function($scope) {
        $scope.format = 'M/d/yy h:mm:ss a';
    }])
    .directive('myCurrentTime', ['$interval', 'dataFilter', function($interval, dataFilter) {
        function link(scope, element, attrs) {
            var format, timeoutId;

            function updateTime() {
                element.text(dataFilter(new Date(), format));
            }
            scope.$watch(attrs.myCurrentTime, function(value) {
                format = value;
                updateTime();
            });
            element.on('$destory', function() {
                $interval.cancel(timeoutId);
            });

            timeoutId = $interval(function() {
                updateTime();
            }, 1000);
        }

        return {
            link: link
        }
    }]);