// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '1';

    $scope.weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast?appid=5765a285b214b60fabda6c75e2736792");


    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city , cnt: $scope.days});
    // console.log($scope.weatherResult);

    $scope.convertToCelsius = function(degK) {
        return Math.round((degK - 273.15)*100)/100;
    }
    
    $scope.convertToDate = function(dt) {
        return new Date(dt*1000);
    }
}]);