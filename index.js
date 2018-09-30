var app = angular.module('selectApp', []);
app.controller('selectCtrl', function ($scope) {

    $scope.selectedValue = "Select"
    $scope.data = [
        {
            id:1,
            name:"Rahul"
        },
        {
            id:2,
            name:"Sudan"
        }

    ]

    $scope.selectFunction = function(name){
        $scope.selectedValue = name;

    }
   
});
