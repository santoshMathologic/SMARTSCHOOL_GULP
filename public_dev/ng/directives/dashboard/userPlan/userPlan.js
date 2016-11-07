'use strict';
angular.module('smartSchoolAdminApp')
    .directive('userPlan', ['$compile', function($compile) {
        return {
            templateUrl: 'ng/directives/dashboard/userPlan/userPlan.html',
            restrict: 'E',
            replace: true,
            
            contoller: function($scope, $http) {

              
              


            }


        }
    }]);
