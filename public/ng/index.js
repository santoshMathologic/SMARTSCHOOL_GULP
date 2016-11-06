'use strict';

var api = {
    protocol: 'http',
    server: 'localhost',
    port: 4000,
    baseUrl: '/api/v1',
    loginUrl: '/login',
    registerUrl: '/register',
    getTrainStations: "/trainStation",
    getGlobalSections: "/globalSections",
    getPlanSections: "/userPlanSectionsList",
    plans : "/plans"
};



var apiUrl = api.protocol + '://' + api.server + ':' + api.port + api.baseUrl;
var apiLoginUrl = api.protocol + '://' + api.server + ':' + api.port + api.loginUrl;
var apiRegisterUrl = api.protocol + '://' + api.server + ':' + api.port + api.registerUrl;
var apiGetTrainStations = apiUrl + api.getTrainStations;
var apiGetPlan = apiUrl + api.getPlanSections;
var apiUserPlan = apiUrl + api.plans;
var initInjector = angular.injector(['ng']);
var $http = initInjector.get('$http');

angular
  .module('smartSchoolAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'smartSchoolAdminApp',
                    files:[
                    'ng/directives/header/header.js',
                     'ng/directives/sidebar/sidebar.js',
                     'ng/utils/serverFetch.js'
                    
                    
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'smartSchoolAdminApp',
              files:[
              'ng/controllers/main.js',
              'ng/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
       .state('dashboard.user',{
        url:'/user',
        controller: 'userCtrl',
        templateUrl:'views/dashboard/user.tmpl.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'smartSchoolAdminApp',
              files:[
              'ng/directives/dashboard/user/user.js',
              'ng/controllers/user.js',
              ]
            })
          }
        }
      })
        .state('dashboard.userPlan',{
        url:'/userPlan',
        controller: 'userPlanCtrl',
        templateUrl:'views/dashboard/userPlan.tmpl.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'smartSchoolAdminApp',
              files:[
              'ng/directives/dashboard/userPlan/userPlan.js',
              'ng/controllers/userPlan.js',
              ]
            })
          }
        }
      })
      .state('login',{
        templateUrl:'views/dashboard/login.html',
        url:'/login'
    })
      
     
  }]);

    
