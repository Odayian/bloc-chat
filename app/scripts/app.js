/*global angular*/
(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });
 
        $stateProvider
            .state('home', {
                url: '/',
                //controller: 'HomeCtrl as home',
                controller: 'RoomCtrl as rooms',
                templateUrl: '/templates/home.html'
            })
            .state('newroom', {
                url: '/',
                controller: 'NewroomCtrl as newroom',
                templateUrl: '/templates/newroom.html',
                bindings: {
                    resolve: '<',
                    close: '&',
                    dismiss: '&'
                }
            })
            .state('test', {
                url: '/',
                //controller: 'HomeCtrl as home',
                //controller: 'RoomCtrl as rooms',
                templateUrl: '/templates/test.html'
            });
    }
    
   
     angular
         .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase'])
         .config(config);
 })();