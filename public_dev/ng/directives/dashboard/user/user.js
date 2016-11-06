'use strict';
angular.module('smartSchoolAdminApp')
  .directive('userForm', ['$compile', function ($compile) {
    return {
      templateUrl: 'ng/directives/dashboard/user/user.html',
      restrict: 'E',
      replace: true,
      scope: {
        'userdetails': '='
      },
      contoller: function ($scope, $http) {

        console.log("Inside User directive Controller");


          console.log(""+"santosh".capitalizeFirstLetter());
        //toaster.pop({type: 'error', title: 'Error', body: 'Unable To '+ saveType.capitalizeFirstLetter()+' User. Please Try Again!!!'});

      }


    }
  }]);
