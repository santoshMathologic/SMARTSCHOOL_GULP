'use strict';

angular.module('smartSchoolAdminApp')
  .controller('userPlanCtrl', function ($scope, $position, $http,toaster) {


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

    $scope.savePlan = function (userPlanObject, saveType) {
      $http.post(apiUserPlan, userPlanObject).then(function (response) {
        if (response.data.status == 200) {
          toaster
            .pop({
              type: 'success',
              title: 'Plan saved Succcessfully',
              body: 'Plan saved Succcessfully.'
            });
        }
      }, function (error) {
      })

    }



  });
