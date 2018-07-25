/*eslint-env browser*/
    



    var app = angular.module('myApp', []);
    app.filter('sumCol', function() {
        
       var total = 0;
       return function(collection, x) 
       {
           console.log('12');
           console.log(collection);
           console.log('14');
           console.log(total);
           var total = 0;
           
           collection.forEach(function(item) 
           {
                total += parseInt(item[column]);                
            });
       } 
       
       return total;
    });

 

    app.controller('myCtrl', function($scope, $http) {
        

            
            
        /*
        * Request data for top 20 cryptocurrencies by total 
        * marketcap from CoinMarketCap API
        */
        $http.get("https://api.coinmarketcap.com/v2/ticker/?limit=8&sort=rank&structure=array")
            .then(function(myArr) {
            console.log(myArr);
            $scope.dataArray= myArr;
        });
        
        
        
        
    
        
    });

  
     
      