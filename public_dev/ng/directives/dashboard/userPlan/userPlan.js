'use strict';
angular.module('smartSchoolAdminApp')
  .directive('userPlanForm', ['$compile', function ($compile) {
    return {
      templateUrl: 'ng/directives/dashboard/userPlan/userPlan.html',
      restrict: 'E',
      replace: true,
      scope: {
        'userdetails': '='
      },
      contoller: function ($scope, $http) {

        
      }


    }
  }]);
