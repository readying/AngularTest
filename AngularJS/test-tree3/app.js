/**
 * Created by Administrator on 2017/4/27.
 */

var app = angular.module('treeDemo',['treeGrid']);

app.controller('mainCtrl', function ($scope) {

    $scope.tree_data = [
        {Name:"USA",Area:9826675,Population:318212000,TimeZone:"UTC -5 to -10",
            children:[
                {Name:"California", Area:423970,Population:38340000,TimeZone:"Pacific Time",
                    children:[
                        {Name:"San Francisco", Area:231,Population:837442,TimeZone:"PST",children:[]},
                        {Name:"Los Angeles", Area:503,Population:3904657,TimeZone:"PST",children:[]}
                    ]
                },
                {Name:"Illinois", Area:57914,Population:12882135,TimeZone:"Central Time Zone",
                    children:[
                        {Name:"Chicago", Area:234,Population:2695598,TimeZone:"CST"}
                    ]
                }
            ]
        },
        {Name:"Texas",Area:268581,Population:26448193,TimeZone:"Mountain",children:[]}
    ];

    // $scope.tree_data=[
    //     {
    //     "id": "90b5e399-1419-11e7-8bf3-5863ea6b5879",
    //     "name": "航天长峰",
    //     "children": [
    //         {
    //             "id": "1",
    //             "name": "研发部",
    //             "children": [
    //                 {
    //                     "id": "50971fae-141a-11e7-8bf3-5863ea6b5879",
    //                     "name": "指挥云组",
    //                     "children": [
    //                         {
    //                             "id": "a07a2957-0812-11e7-befe-7c6896b5c9d2",
    //                             "nodeName": "Lion士大夫asdf"
    //                         },
    //                         {
    //                             "id": "b3d360ba-0812-11e7-befe-7c6896b5c9d2",
    //                             "nodeName": "Adazhangboa"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "id": "576c5e58-141a-11e7-8bf3-5863ea6b5879",
    //                     "nodeName": "视频大数据",
    //                     "children": [
    //                         {
    //                             "id": "c5449c88-0812-11e7-befe-7c6896b5c9d2",
    //                             "nodeName": "Sherry"
    //                         },
    //                         {
    //                             "id": "643895b1-09e2-11e7-9114-c51f4c21be57",
    //                             "nodeName": "adminUser"
    //                         }
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             "id": "49afd075-141a-11e7-8bf3-5863ea6b5879",
    //             "nodeName": "人事部",
    //             "children": [
    //                 {
    //                     "id": "54062387-141a-11e7-8bf3-5863ea6b5879",
    //                     "nodeName": "人事组"
    //                 }
    //             ]
    //         },
    //         {
    //             "id": "4d850cb7-141a-11e7-8bf3-5863ea6b5879",
    //             "nodeName": "市场部"
    //         }
    //     ]
    // }];

    $scope.tree_data1 =
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

    $scope.tree_data2 =
        [
            {
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
                                        "nodeName": "Lion士大夫asdf",
                                        "children": []
                                    },
                                    {
                                        "id": "b3d360ba-0812-11e7-befe-7c6896b5c9d2",
                                        "nodeName": "Adazhangboa",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "576c5e58-141a-11e7-8bf3-5863ea6b5879",
                                "nodeName": "视频大数据",
                                "children": [
                                    {
                                        "id": "c5449c88-0812-11e7-befe-7c6896b5c9d2",
                                        "nodeName": "Sherry",
                                        "children": []
                                    },
                                    {
                                        "id": "643895b1-09e2-11e7-9114-c51f4c21be57",
                                        "nodeName": "adminUser",
                                        "children": []
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
                                "nodeName": "人事组",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "4d850cb7-141a-11e7-8bf3-5863ea6b5879",
                        "nodeName": "市场部",
                        "children": []
                    }
                ]
            }
        ];


    // $scope.expanding_property={
    //     filed:"nodeName",
    //     displayName:'haha',
    //     cellTemplate:"<i>{{row.branch[expandingProperty.filed]}}"
    // };


    $scope.col_defs = [
        {
            field: "name",
            displayName: "cx"
        }
    ];

    $scope.my_tree_handler = function (branch) {
        console.log('you clicked on', branch);

    }

});