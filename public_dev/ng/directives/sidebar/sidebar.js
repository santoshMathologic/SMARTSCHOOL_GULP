'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('smartSchoolAdminApp')
	.directive('sidebar', ['$location', function () {
		return {
			templateUrl: 'ng/directives/sidebar/sidebar.html',
			restrict: 'E',
			replace: true,
			scope: {
			},
			controller: function ($scope, $location) {
				$scope.selectedMenu = 'dashboard';
				$scope.collapseVar = 0;
				$scope.multiCollapseVar = 0;
				$scope.hideSidebarVar = false;
				$scope.tooltipMessage = 'Hide Sidebar!';
				$scope.hasAdmin = false;
				$scope.check = function (x) {
					if (x == $scope.collapseVar)
						$scope.collapseVar = 0;
					else
						$scope.collapseVar = x;
				};

			}
		}
	}]);


