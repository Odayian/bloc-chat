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
                controller: 'RoomCtrl as house',
                templateUrl: '/templates/messages.html'
            });


    }
    
   
     angular
         .module('blocChat', ['ui.router','ui.bootstrap', 'firebase', 'ngCookies'])
         .config(config);
 })();