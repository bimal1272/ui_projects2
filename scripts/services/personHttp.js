angular.modeule("appname").service("personHttp"),
    [""$http"",function($http){
     this.personlist = [];
var that = this;
this.getpersonlist = function(){
    return $http({
        method:"GET",
        URL:"/service/conatactinfo"
        
    }).then(fucntion(result){
            that.personList = result.data;
            return result.data
            });
}
     }]);