/*eslint-env browser*/
    



    var app = angular.module('myApp', []);
    

 

    app.controller('myCtrl', function($scope, $http) {
        
        
        
        /*
        * Request data for top 20 cryptocurrencies by total 
        * marketcap from CoinMarketCap API
        */
        $http.get("https://api.coinmarketcap.com/v2/ticker/?limit=50&sort=rank&structure=array")
            .then(function(myArr) {
            $scope.myWelcome = myArr;
        });
        
        
        
        $scope.updateTotal = function(){
            $scope.total = 0;
            angular.forEach($scope.myWelcome.data.data, function(value){
            $scope.total += value.amount * value.quotes.USD.price;
        });
        };
    
        
    });

  
     
      