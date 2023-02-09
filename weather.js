function displayresult() {
    var city = document.getElementById("city").value;
    var apikey='f717d0fdf28c882749f982e77220eaf1';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
    + city + '&appid='+apikey+'&units=metric')
       .then(response => response.json())
       .then(data => {
          var t = data['main']['temp']
          var x = data['main']['temp_min']
          var y = data['main']['temp_max']
          document.getElementById("output").innerHTML = t;
          document.getElementById("min").innerHTML = x;
          document.getElementById("max").innerHTML = y;
})
}
