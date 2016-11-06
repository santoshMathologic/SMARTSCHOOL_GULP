'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('smartSchoolAdminApp')
	.directive('sidebar',function(){
		return {
        templateUrl:'ng/directives/sidebar/sidebar.html',
        restrict: 'E',
        replace: true,
    	}
	});


