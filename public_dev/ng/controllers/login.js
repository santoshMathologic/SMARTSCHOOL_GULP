'use strict';

angular.module('smartSchoolAdminApp')
    .controller('LoginCtrl', function ($scope, $position, $state, toaster, UserAuthFactory, AuthenticationFactory,$http) {

        $scope.doLogin = function (userName, password) {

            if (!userName.isEmpty() && !password.isEmpty()) {
                UserAuthFactory.login(userName, password).success(function (res) {
                    AuthenticationFactory.isLogged      = true;
                    AuthenticationFactory.user          = res.user.username;
                    AuthenticationFactory.userRole      = res.user.role;
                    $window.sessionStorage.token        = res.token;
                    $window.sessionStorage.user         = res.user.username;
                    $window.sessionStorage.userRole     = res.user.role;

                    //$state.go('home.userPlan');
                    $state.go("dashboard.home");

                }).error(function (res) {
                    console.log("Inside Loggin Error");
                });



            }
            else {
                toaster
                    .pop({
                        type: 'danger',
                        title: 'Username and Password Required',
                        body: 'Username and Password Required.'
                    });
            }

        }
    });
