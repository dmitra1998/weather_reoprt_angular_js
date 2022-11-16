//Controllers

weatherApp.controller('homeController',['$scope', '$location', 'cityService', function($scope, $location, cityService){

    $scope.city = cityService.city;

    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });

    $scope.submit = function() {
        $location.path("/forecast");
    }

}]);

weatherApp.controller('forecastController',['$scope', 'cityService', 'weatherService', function($scope, cityService, weatherService){
    
    $scope.city = cityService.city;

    $scope.weatherResult = weatherService.GetWeather($scope.city);

    console.log($scope.weatherResult);
    console.log($scope.weatherResult.list);
    //console.log($scope.weatherAPI.get({q: $scope.city}));
    console.log(Object.keys($scope.weatherResult));
    console.log($scope.weatherResult['$promise']['$$state']);
    console.log($scope.weatherResult.$promise.$$state);
    console.log($scope.weatherResult.current);

}]);