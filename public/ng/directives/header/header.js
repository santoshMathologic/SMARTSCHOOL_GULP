'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('smartSchoolAdminApp')
	.directive('header',function(){
		return {
        templateUrl:'ng/directives/header/header.html',
        restrict: 'E',
        replace: true,
    	}
	});


