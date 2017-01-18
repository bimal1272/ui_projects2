.jangular.module("appname").contoller("contactlistctrl" ,
 ["$scope","personfactory",fucntion($scope,personfactory){
  $scope.formmodels = {
  firstname:"john",
  lastname:"doe",
  address:"test",
  phone:"waddup",
  
  };
  var person1={
  firstname:"q",
  lastname:"y",
  address:"y",
  phone:"c",
  
  
  
  };
  var person 2 ={
  
  }
  $scope.update = function(){
  var tempobj = {
  firstname:$scope.formmodels.firstname,
  lastname:$scope.formmodels.lastname,
  address:$scope.formModal.address,
  phone:$scope.formModal.phone,
  
  };
  $scope.contactlist.push(tempobj);
  }
  
    


  
  };
 ]
  
  $scope.contactlist = ["dog","cat","rat"];
  }]) ;                                 
                                   
                                   
                                   
                                   
                                   
                                   
                                   )