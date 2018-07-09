/*eslint-env browser*/

function calculateTotal() {
    document.getElementById("totalAmount").innerHTML = num;
}
        
        var app = angular.module('myApp', []);


        var num = 0;

        app.controller('myCtrl', function($scope, $http, $timeout) {
        
        
        
        /*
        * Request data for top 20 cryptocurrencies by total 
        * marketcap from CoinMarketCap API
        */
        $http.get("https://api.coinmarketcap.com/v2/ticker/?limit=20&sort=rank&structure=array")
            .then(function(myArr) {
            $scope.myWelcome = myArr;
        });
    
        
    });

  
     
      