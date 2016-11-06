'use strict';

angular.module('smartSchoolAdminApp')
  .controller('userPlanCtrl', function($scope,$position) {


    $scope.userPlanLists = [];
        $scope.query = {
          order: 'planName',
          limit: 10,
          page: 1,

        };
  
        $scope.getUserPlan = function () {
          $http.get(apiUserPlan, { params: $scope.query })
            .then(function (response) {
              $scope.userPlanLists = response.data.results;
              $scope.currentPage = response.data.current;
              $scope.perPage = response.data.options.perPage;
              $scope.totalPages = response.data.last;
              $scope.totalRecords = response.data.count;
            });
        }

        $scope.getUserPlan();

  
  });
