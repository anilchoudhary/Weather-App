// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New Delhi";
    
});

weatherApp.service('weatherService', ['$resource', function($resource){

    this.GetWeather = function(city, days){
        var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast?appid=5765a285b214b60fabda6c75e2736792");


        return weatherAPI.get({ q: city , cnt: days});
    };
    
}]);