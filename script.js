function getWeather(event) {
    //event.preventDefault()
    var search = document.getElementById("searchBox").value;
    
    if(search === "") {
        alert("Error! Please re-try search.");
    } else if(isNaN(search)) {
        var city = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${'08dac40a01916c37878befa9615d7b6b'}&units=imperial`;

        fetch(city)
        .then(function(response) {
            return response.json();
        })  
        .then(function(data) {
            console.log(data);

            var cityOutput = document.getElementById("city");
            var city = data.name;            
            cityOutput.innerHTML = city;
           
            var zipOutput = document.getElementById("zip");
            var zip = search;
            zipOutput.innerHTML = "N/A";

            var tempOutput = document.getElementById("temp");
            var temp = data.main.temp;
            tempOutput.innerHTML = temp;

            var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            document.getElementById("graphic").src = icon;
            
        })
        .catch(function(err) { 
            console.log(err);
        });    
    } else {
        var zip = `https://api.openweathermap.org/data/2.5/weather?zip=${search}&appid=${'08dac40a01916c37878befa9615d7b6b'}&units=imperial`;
       
        fetch(zip)
        .then(function(response) {
            return response.json();
        })  
        .then(function(data) {
            console.log(data);

            var zipOutput = document.getElementById("zip");
            var zip = search;
            zipOutput.innerHTML = zip;

            var cityOutput = document.getElementById("city");
            var city = data.name;            
            cityOutput.innerHTML = city;
           
            var tempOutput = document.getElementById("temp");
            var temp = data.main.temp;
            tempOutput.innerHTML = temp;   
            
            var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            document.getElementById("graphic").src = icon;
        })
        .catch(function(err) { 
            console.log(err);
        }); 
    }
}


var resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function(e) {
    e.preventDefault();
    console.log('test');
    
    var search = document.getElementById("searchBox").value;
    search = ""; //? won't clear text box!

    var tempOutput = document.getElementById("temp");
    tempOutput.innerHTML = "";

    var zipOutput = document.getElementById("zip");
    zipOutput.innerHTML = "";

    var cityOutput = document.getElementById("city");          
    cityOutput.innerHTML = "";
           
    document.getElementById("graphic").src = "";
})
