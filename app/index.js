/*created by Guo_rf*/

var app = angular.module('show',[]);
app.controller('tree-home',function($scope,Tree){
    $scope.data = [
        {id: 1, title: 'orgin1', content: 'orgin1 text', items: [
            {
                id: 11,
                title: 'son1',
                content: 'son1 text',
                items: [{
                    id: 111,
                    title: 'ss1',
                    content: 'ss1 text'
                },{
                    id: 112,
                    title: 'ss2',
                    content: 'ss2 text'
                }]
            },
            {
                id: 12,
                title: 'son1',
                content: 'son1 text',
                items: [
                    {
                        id: 121,
                        title: 'ss1',
                        content: 'ss1 text'
                    },{
                        id: 122,
                        title: 'ss2',
                        content: 'ss2 text'
                    },
                    {
                        id: 122,
                        title: 'ss2',
                        content: 'ss2 text'
                    }
                ]
            }
        ]},
        {
            id: 2, title: 'orgin2', content: 'orgin2 text', items: [
            {
                id: 21,
                title: 'son1',
                content: 'son1 text',
                items: [{
                    id: 211,
                    title: 'ss1',
                    content: 'ss1 text'
                }, {
                    id: 212,
                    title: 'ss2',
                    content: 'ss2 text'
                }]

            }]
        }
    ];

    Tree.enhance($scope.data,'items')
    console.log($scope.data,'if all child get the enhance')
})

