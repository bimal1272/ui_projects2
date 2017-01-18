angular.module("appName").controller("appCtrl",
["$scope","personService",function($scope,personservice){
    $scope.title="Hello World";
    $scope.formModal="George";
    
    $scope.change=function(){
        $scope.title="welcome to angular";
        alert($scope.formModal);
        
    }
    $scope.displayPerson=function(){
        
        console.log("from app ctrl");
        personservice.testvalues();
    }
});