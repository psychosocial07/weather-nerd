let weather=document.getElementById("weather");
let max=document.getElementById("max_temp");
let min=document.getElementById("min_temp");
let city=document.getElementById("city");

document.getElementById("search").addEventListener("click", openweather);


function openweather()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=8af27856c4370f540adb778898c834f9')
    .then(reponse => reponse.json())
    .then(data => {
        let lat=data.coord.lat;
        let lon=data.coord.lon;

        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid=8af27856c4370f540adb778898c834f9')
        .then(reponse => reponse.json())
        .then(data => {
            let tempmin1=data.daily[0].temp.min-273;
            let tempmax1=data.daily[0].temp.max-273;
            let w=data.daily[0].weather[0].main;
            console.log(tempmax1);
            console.log(tempmin1);
            console.log(w);
            weather.innerHTML =w;
            max.innerHTML =tempmax1;
            min.innerHTML =tempmin1;

        })
        return;
     })
     .catch(err =>alert("Wrong City!"))
     
}

