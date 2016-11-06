'use strict';
angular.module('smartSchoolAdminApp')
  .directive('userForm', ['$compile', function ($compile) {
    return {
      templateUrl: 'ng/directives/dashboard/user/user.html',
      restrict: 'E',
      replace: true,
      scope: {
        'userdetails': '=',
      },
      contoller: function ($scope, $http) {

        console.log("Inside User directive Controller");

      }


    }
  }]);
