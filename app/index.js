/*created by Guo_rf*/

var app = angular.module('show',['ui.tree']);
app.controller('tree-home',function($scope,Tree){
    $scope.vm = {
        path: '../app/tmp/tree-tmp.html'
    }
    $scope.data = [
        {
            "id": 11,
            "title": "node1.1",
            "nodes": []
        },
        {
            "id": 111,
            "title": "node1.1.1",
            "nodes": []
        },
        {
            "id": 1,
            "title": "node1",
            "nodes": [
                {
                    "id": 2,
                    "title": "node2",
                    "nodrop": true,
                    "nodes": [
                        {
                            "id": 22,
                            "title": "node2.2",
                            "nodes": []
                        },
                        {
                            "id": 21,
                            "title": "node2.1",
                            "nodes": []
                        }
                    ]
                },
                {
                    "id": 12,
                    "title": "node1.2",
                    "nodes": []
                }
            ]
        },
        {
            "id": 31,
            "title": "node3.1",
            "nodes": [
                {
                    "id": 310,
                    "title": "node3.1.1",
                    "nodes": []
                }
            ]
        },
        {
            "id": 3,
            "title": "node3",
            "nodes": []
        }
    ]
    Tree.enhanceItem($scope.data,'nodes')

})

