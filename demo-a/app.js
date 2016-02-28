//MODULE
var lieApp = angular.module('lieApp', ['ngRoute', 'ngResource']);

//ROUTES
lieApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/one.htm',
        controller: 'oneController'     
    })
    
    .when('/two', {
        templateUrl: 'views/two.htm',
        controller: 'twoController'      
    })
    
    
});


//SERVICES
lieApp.service('cityService',function() {
    
    this.city ="Boston , US";
});

//CONTROLLERS
lieApp.controller('oneController', ['$scope', 'cityService', function ($scope, cityService) {
    
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    })
    
}]);

lieApp.controller('twoController', ['$scope', '$resource', 'cityService' , function ($scope, $resource, cityService) {
    
    $scope.city = cityService.city;
    $scope.weatherAPI=
        $resource("http://jsonplaceholder.typicode.com/posts")

    
}]);