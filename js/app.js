angular.module('carFire', ['ui.router', 'firebase'])

.config(function($stateProvider, $urlRouterProvider) { 
    $stateProvider
        .state('Cars', {
            url: '/cars',
            templateUrl: 'js/views/cars.html',
            controller: 'carsCtrl'
        })
        .state('Car', {
            url: '/cars/:carId',
            templateUrl: 'js/views/car.html',
            controller: 'carCtrl'
        });
    $urlRouterProvider.otherwise('/cars');
});
