angular.module('carFire').controller('carCtrl', function($scope, $stateParams, carsSvc) {
    var currentCarId = $stateParams.carId;
    
    $scope.car = carsSvc.getCar(currentCarId);
});