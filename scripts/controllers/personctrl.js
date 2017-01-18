"use strict";
angular.module("appName").controller("personctrl",["$scope","personservice"$scope,persoService){
    
    alert("testing for person ctrl");
                                                   
                                                   
    function init(){
                                                   
         personservice.setFirstname("barack") ;
         personservice.setlastname("obama");
         personsService.setAddress("dc") ;
         personservice.setPhone("121");
                                                   
         }                               

            $scope.initialize=fucntion(){
                init();
                console.log("from person ctrl");
                personservice.testvalues();                                 
            }                         
                                     
        }];