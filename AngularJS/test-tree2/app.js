angular.module("com.ngbook.demo", [])
    .controller("DemoController", ['$scope', '$http', function ($scope, $http) {
        var vm = this;

        vm.treej=
           [ {
                "id": "190b5e399-1419-11e7-8bf3-5863ea6b5879",
                "name": "家用电器",
                "children": [
                    {
                        "id": "4",
                        "name": "大家电",
                        "children": [
                            {
                                "id": "7",
                                "name": "空调",
                                "children": [
                                    {
                                        "id": "15",
                                        "name": "海尔空调"
                                    },
                                    {
                                        "id": "1649afd075-141a-11e7-8bf3-5863ea6b5879",
                                        "name": "美的空调"
                                    }
                                ]
                            },
                            {
                                "id": "8",
                                "name": "冰箱"
                            },
                            {
                                "id": "9",
                                "name": "洗衣机"
                            },
                            {
                                "id": "10",
                                "name": "热水器"
                            }
                        ]
                    },
                    {
                        "id": "5",
                        "name": "生活电器",
                        "children": [
                            {
                                "id": "19",
                                "name": "加湿器"
                            },
                            {
                                "id": "20",
                                "name": "电熨斗"
                            }
                        ]
                    }
                ]
            }];

        vm.treei=

            [{
                "id": "90b5e399-1419-11e7-8bf3-5863ea6b5879",
                "nodeName": "航天长峰",
                "children": [
                    {
                        "id": "1",
                        "nodeName": "研发部",
                        "children": [
                            {
                                "id": "50971fae-141a-11e7-8bf3-5863ea6b5879",
                                "nodeName": "指挥云组",
                                "children": [
                                    {
                                        "id": "a07a2957-0812-11e7-befe-7c6896b5c9d2",
                                        "nodeName": "Lion士大夫asdf"
                                    },
                                    {
                                        "id": "b3d360ba-0812-11e7-befe-7c6896b5c9d2",
                                        "nodeName": "Adazhangboa"
                                    }
                                ]
                            },
                            {
                                "id": "576c5e58-141a-11e7-8bf3-5863ea6b5879",
                                "nodeName": "视频大数据",
                                "children": [
                                    {
                                        "id": "c5449c88-0812-11e7-befe-7c6896b5c9d2",
                                        "nodeName": "Sherry"
                                    },
                                    {
                                        "id": "643895b1-09e2-11e7-9114-c51f4c21be57",
                                        "nodeName": "adminUser"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "49afd075-141a-11e7-8bf3-5863ea6b5879",
                        "nodeName": "人事部",
                        "children": [
                            {
                                "id": "54062387-141a-11e7-8bf3-5863ea6b5879",
                                "nodeName": "人事组"
                            }
                        ]
                    },
                    {
                        "id": "4d850cb7-141a-11e7-8bf3-5863ea6b5879",
                        "nodeName": "市场部"
                    }
                ]
            }];
        // $http({
        //     url: 'http://192.168.5.183:9090/ma/department/90b5e399-1419-11e7-8bf3-5863ea6b5879/tree',
        //     method: 'GET'
        // }).success(function (data) {
        //     $scope.data = JSON.stringify(data);
        //     vm.tree = $scope.data.data;
        //     console.log(vm.tree);
        //
        // });

        vm.tree =
            [{
                "id": "90b5e399-1419-11e7-8bf3-5863ea6b5879",
                "name": "航天长峰",
                "children": [
                    {
                        "id": "1",
                        "name": "研发部",
                        "children": [
                            {
                                "id": "50971fae-141a-11e7-8bf3-5863ea6b5879",
                                "name": "指挥云组",
                                "children": [
                                    {
                                        "id": "a07a2957-0812-11e7-befe-7c6896b5c9d2",
                                        "name": "Lion士大夫asdf"
                                    },
                                    {
                                        "id": "b3d360ba-0812-11e7-befe-7c6896b5c9d2",
                                        "name": "Adazhangboa"
                                    }
                                ]
                            },
                            {
                                "id": "576c5e58-141a-11e7-8bf3-5863ea6b5879",
                                "name": "视频大数据",
                                "children": [
                                    {
                                        "id": "c5449c88-0812-11e7-befe-7c6896b5c9d2",
                                        "name": "Sherry"
                                    },
                                    {
                                        "id": "643895b1-09e2-11e7-9114-c51f4c21be57",
                                        "name": "adminUser"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "49afd075-141a-11e7-8bf3-5863ea6b5879",
                        "name": "人事部",
                        "children": [
                            {
                                "id": "54062387-141a-11e7-8bf3-5863ea6b5879",
                                "name": "人事组"
                            }
                        ]
                    },
                    {
                        "id": "4d850cb7-141a-11e7-8bf3-5863ea6b5879",
                        "name": "市场部"
                    }
                ]
            }];
        // vm.tree = JSON.parse($scope.data);

        vm.itemClicked = function ($item) {
            vm.selectedItem = $item;
            console.log($item, 'item clicked');
        };

        vm.itemCheckedChanged = function ($item) {
            $http.post('/url', $item);
            console.log($item, 'item checked');
        };

        return vm;
    }])
    .directive('treeView', [function () {

        return {
            restrict: 'E',
            templateUrl: '/treeView.html',
            scope: {
                treeData: '=',
                canChecked: '=',
                valueField:'@',
                textField: '@',
                itemClicked: '&',
                itemCheckedChanged: '&',
                itemTemplateUrl: '@'
            },
            controller: ['$scope', function ($scope) {
                $scope.itemExpended = function (item, $event) {
                    item.$$isExpend = !item.$$isExpend;
                    $event.stopPropagation();
                };

                $scope.getItemIcon = function (item) {
                    var isLeaf = $scope.isLeaf(item);

                    if (isLeaf) {
                        return 'fa fa-leaf';
                    }

                    return item.$$isExpend ? 'fa fa-minus' : 'fa fa-plus';
                };

                $scope.isLeaf = function (item) {
                    return !item.children || !item.children.length;
                };

                $scope.warpCallback = function (callback, item, $event) {
                    ($scope[callback] || angular.noop)({
                        $item: item,
                        $event: $event
                    });
                };
            }]
        };
    }]);