"use strict";
angular.module("appName").directive("contactListForm"
,[function(){
    return{
        restrict:"EMAC",
        controller:"contactListCtrl",
        template:"<table class=\"table\"><tr><td>First Name</td>"
        templateUrl:"/views"
        link:function($scope) {
        $scope.searchMD = "";
    }
        
    }
}]);
