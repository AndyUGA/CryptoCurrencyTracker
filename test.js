/*eslint-env browser*/

function calculateTotal() {
    document.getElementById("totalAmount").innerHTML = num;
}


        var num = 0;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
        var myArr = JSON.parse(this.responseText);
        var price = document.getElementById("bitcoinPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
        document.getElementById("bitcoinTotalAmount").innerHTML = (price * 0).toFixed(2);   
        }
    };
        xmlhttp.open("GET", "https://api.coinmarketcap.com/v2/ticker/1/", true);
        xmlhttp.send();

        var xmlhttp2 = new XMLHttpRequest();
        xmlhttp2.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
            var myArr = JSON.parse(this.responseText);
            var price = document.getElementById("neoPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2); 
            document.getElementById("neoPrice").innerHTML = price;
            var totalAmount = document.getElementById("neoTotalAmount").innerHTML = (price * 5).toFixed(2);
            num = parseInt(num) + parseInt(totalAmount);
           
            }
        };
        xmlhttp2.open("GET", "https://api.coinmarketcap.com/v2/ticker/1376/", true);
        xmlhttp2.send();
        
        var xmlhttp3 = new XMLHttpRequest();
        xmlhttp3.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
            var myArr = JSON.parse(this.responseText);
            var price = document.getElementById("iotaPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            var totalAmount = document.getElementById("iotaTotalAmount").innerHTML = (price * 5).toFixed(2);
            num = parseInt(num) + parseInt(totalAmount);
            
            }
        };
        xmlhttp3.open("GET", "https://api.coinmarketcap.com/v2/ticker/1720/", true);
        xmlhttp3.send();

        var xmlhttp4 = new XMLHttpRequest();
        xmlhttp4.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
            var myArr = JSON.parse(this.responseText);
            var price = document.getElementById("vertcoinPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            var totalAmount = document.getElementById("vertcoinTotalAmount").innerHTML = (price * 5).toFixed(2);
            num = parseInt(num) + parseInt(totalAmount);
            }
        };
        xmlhttp4.open("GET", "https://api.coinmarketcap.com/v2/ticker/99/", true);
        xmlhttp4.send();


        var xmlhttp5 = new XMLHttpRequest();
        xmlhttp5.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
            var myArr = JSON.parse(this.responseText);
            var price = document.getElementById("carnadoPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            var totalAmount = document.getElementById("carnadoTotalAmount").innerHTML = (price * 5).toFixed(2);
            num = parseInt(num) + parseInt(totalAmount);
            
            }
        };
        xmlhttp5.open("GET", "https://api.coinmarketcap.com/v2/ticker/2010/", true);
        xmlhttp5.send();

        var xmlhttp6 = new XMLHttpRequest();
        xmlhttp6.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
            var myArr = JSON.parse(this.responseText);
            var price = document.getElementById("golemPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            var totalAmount = document.getElementById("golemTotalAmount").innerHTML = (price * 5).toFixed(2);
            num = parseInt(num) + parseInt(totalAmount);
            }
        };
        xmlhttp6.open("GET", "https://api.coinmarketcap.com/v2/ticker/1455/", true);
        xmlhttp6.send();
        
        var xmlhttp7 = new XMLHttpRequest();
        xmlhttp7.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
            var myArr = JSON.parse(this.responseText);
            var price = document.getElementById("arkPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            var totalAmount = document.getElementById("arkTotalAmount").innerHTML = (price * 5).toFixed(2);
            num = parseInt(num) + parseInt(totalAmount);
            }
        };
        xmlhttp7.open("GET", "https://api.coinmarketcap.com/v2/ticker/1586/", true);
        xmlhttp7.send();
       
        
        var xmlhttp13 = new XMLHttpRequest();
        xmlhttp13.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200) 
            {
            var myArr = JSON.parse(this.responseText);
            var price = document.getElementById("substratumPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            var totalAmount = document.getElementById("substratumTotalAmount").innerHTML = (price * 5).toFixed(2);
            num = parseInt(num) + parseInt(totalAmount);
            }
        }
        xmlhttp13.open("GET", "https://api.coinmarketcap.com/v2/ticker/1984/", true);
        xmlhttp13.send();
        
        var xmlhttp14 = new XMLHttpRequest();
        xmlhttp14.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200) 
            {
            var myArr = JSON.parse(this.responseText);
            var price = document.getElementById("requestNetworkPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            var totalAmount = document.getElementById("requestNetworkTotalAmount").innerHTML = (price * 5).toFixed(2);
            num = parseInt(num) + parseInt(totalAmount);
            }
        }
        xmlhttp14.open("GET", "https://api.coinmarketcap.com/v2/ticker/2071/", true);
        xmlhttp14.send();
        
        var xmlhttp15 = new XMLHttpRequest();
        xmlhttp15.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200) 
            {
            var myArr = JSON.parse(this.responseText);
            var price = document.getElementById("wabiPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            var totalAmount = document.getElementById("wabiTotalAmount").innerHTML = (price * 5).toFixed(2);
            num = parseInt(num) + parseInt(totalAmount);   
            }
        }
        xmlhttp15.open("GET", "https://api.coinmarketcap.com/v2/ticker/2267/", true);
        xmlhttp15.send();
        
        var xmlhttp16 = new XMLHttpRequest();
        xmlhttp16.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200) 
            {
            var myArr = JSON.parse(this.responseText);
            var price = document.getElementById("stellarLumensPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            var totalAmount = document.getElementById("stellarLumensTotalAmount").innerHTML = (price * 5).toFixed(2); 
            num = parseInt(num) + parseInt(totalAmount);
            }
        }
        xmlhttp16.open("GET", "https://api.coinmarketcap.com/v2/ticker/512/", true);
        xmlhttp16.send();
        
        var xmlhttp17 = new XMLHttpRequest();
        xmlhttp17.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200) 
            {
            var myArr = JSON.parse(this.responseText);
            var price = document.getElementById("iconPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            var totalAmount = document.getElementById("iconTotalAmount").innerHTML = (price * 5).toFixed(2);
            num = parseInt(num) + parseInt(totalAmount);    
            }
        }
        xmlhttp17.open("GET", "https://api.coinmarketcap.com/v2/ticker/2099/", true);
        xmlhttp17.send();
        
        
       
        
    
        
        var xmlhttp20 = new XMLHttpRequest();
        xmlhttp20.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200) 
            {
            var myArr = JSON.parse(this.responseText);
            var price = document.getElementById("ripplePrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            var totalAmount = document.getElementById("rippleTotalAmount").innerHTML = (price * 5).toFixed(2);
            num = parseInt(num) + parseInt(totalAmount);
            }
        }
        xmlhttp20.open("GET", "https://api.coinmarketcap.com/v2/ticker/52/", true);
        xmlhttp20.send();
        