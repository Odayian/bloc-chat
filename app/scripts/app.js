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
                controller: 'RoomCtrl as house',
                templateUrl: '/templates/messages.html'
            });
            // .state('test', {
            //     url: '/',
            //     //controller: 'HomeCtrl as home',
            //     //controller: 'RoomCtrl as rooms',
            //     templateUrl: '/templates/test.html'
            // })
            // .state('messages', {
            //     url: '/',
            //     //controller: 'HomeCtrl as home',
            //     //controller: 'RoomCtrl as house',
            //     templateUrl: '/templates/messages.html'
            // });

    }
    
   
     angular
         .module('blocChat', ['ui.router','ui.bootstrap', 'firebase'])
         .config(config);
 })();