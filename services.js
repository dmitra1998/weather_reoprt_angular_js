//Services

weatherApp.service('cityService', function(){

    this.city = "Kolkata, West Bengal"; 

});

weatherApp.service('weatherService', ['$resource', function($resource){

    this.GetWeather = function(city) {
        var weatherAPI = $resource("http://api.weatherapi.com/v1/current.json?key=40dc4827d7624efcabc142044220511", {
        callback: "JSON_CALLBACK"}, +'&'+ {get: {method: "JSONP"}} );

        return weatherAPI.get({q: city});
    }

}]);