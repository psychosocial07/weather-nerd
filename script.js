let city=document.getElementById("city");
function getweather()
{
    openweather();
    weatherbit();
    const date1= new Date();
    const date2 = new Date();
    const date3= new Date();
    const date4= new Date();
    date2.setDate(date2.getDate()+1);
    date3.setDate(date3.getDate()+2);
    date4.setDate(date4.getDate()+3);
    document.getElementById("date1").innerHTML=((date1.toString()).substr(0,15));
    document.getElementById("date2").innerHTML=((date2.toString()).substr(0,15));
    document.getElementById("date3").innerHTML=((date3.toString()).substr(0,15));
    document.getElementById("date4").innerHTML=((date4.toString()).substr(0,15));
    var b1=document.getElementsByClassName("box1");
    var b2=document.getElementsByClassName("box2");
    for(var i=0;i<4;i++)
    {
        b1[i].innerHTML="";
        b2[i].innerHTML="";
    }
}
function printweather1(tempmin,tempmax,winddeg,windspd,humid,cloudiness,rainchances,weatherdescription,code)
{
    for(var i=1;i<=4;i++)
    {
        var box=document.getElementsByClassName("box1");
        var img=document.createElement("img");
        img.src="http://openweathermap.org/img/w/"+code[i-1]+".png";
        box[i-1].appendChild(img);
        var para=document.createElement("H2");
        var temp=document.createTextNode(weatherdescription[i-1]);
        para.appendChild(temp);
        box[i-1].appendChild(para);
        var para=document.createElement("P");
        var temp=document.createTextNode("Min Temp : "+(Math.round(tempmin[i-1])).toString()+"°C");
        para.appendChild(temp);
        box[i-1].appendChild(para);
        var para=document.createElement("P");
        var temp=document.createTextNode("Max Temp : "+(((Math.round(tempmax[i-1])).toString()).replace('Â',''))+"°C");
        para.appendChild(temp);
        box[i-1].appendChild(para);
        var para=document.createElement("P");
        var temp=document.createTextNode("Cloud Coverage : "+(cloudiness[i-1]).toString()+"%");
        para.appendChild(temp);
        box[i-1].appendChild(para);
        var para=document.createElement("P");
        var temp=document.createTextNode("Humidity : "+(humid[i-1]).toString()+"%");
        para.appendChild(temp);
        box[i-1].appendChild(para);
        var para=document.createElement("P");
        var temp=document.createTextNode("Wind Speed : "+(windspd[i-1]).toString()+"m/s");
        para.appendChild(temp);
        box[i-1].appendChild(para);
        var para=document.createElement("P");
        var temp=document.createTextNode("Wind Direction : "+(winddeg[i-1]).toString()+"°");
        para.appendChild(temp);
        box[i-1].appendChild(para);
        var para=document.createElement("P");
        var temp=document.createTextNode("Probability Of Precipitation : "+(rainchances[i-1]*100).toString()+"%");
        para.appendChild(temp);
        box[i-1].appendChild(para);   
    }
    
}
function printweather2(tempmin,tempmax,winddeg,windspd,humid,cloudiness,rainchances,weatherdescription,code)
{
    for(var i=1;i<=4;i++)
    {
        var box=document.getElementsByClassName("box2");
        var img=document.createElement("img");
        img.src="https://www.weatherbit.io/static/img/icons/"+code[i-1]+".png";
        box[i-1].appendChild(img);
        var para=document.createElement("H2");
        var temp=document.createTextNode(weatherdescription[i-1]);
        para.appendChild(temp);
        box[i-1].appendChild(para);
        var para=document.createElement("P");
        var temp=document.createTextNode("Min Temp : "+(Math.round(tempmin[i-1])).toString()+"°C");
        para.appendChild(temp);
        box[i-1].appendChild(para);
        var para=document.createElement("P");
        var temp=document.createTextNode("Max Temp : "+(Math.round(tempmax[i-1])).toString()+"°C");
        para.appendChild(temp);
        box[i-1].appendChild(para);
        var para=document.createElement("P");
        var temp=document.createTextNode("Cloud Coverage : "+(cloudiness[i-1]).toString()+"%");
        para.appendChild(temp);
        box[i-1].appendChild(para);
        var para=document.createElement("P");
        var temp=document.createTextNode("Humidity : "+(humid[i-1]).toString()+"%");
        para.appendChild(temp);
        box[i-1].appendChild(para);
        var para=document.createElement("P");
        var temp=document.createTextNode("Wind Speed : "+(windspd[i-1]).toString()+"m/s");
        para.appendChild(temp);
        box[i-1].appendChild(para);
        var para=document.createElement("P");
        var temp=document.createTextNode("Wind Direction : "+(winddeg[i-1]).toString()+"°");
        para.appendChild(temp);
        box[i-1].appendChild(para);
        var para=document.createElement("P");
        var temp=document.createTextNode("Probability Of Precipitation : "+(rainchances[i-1]).toString()+"%");
        para.appendChild(temp);
        box[i-1].appendChild(para);
    }
    for(var i=2;i<10;i+=2)
    {
        
        var img=document.getElementsByTagName("img")[i-2];
        img.style.height='120px';
        img.style.width='120px';
        var header2=document.getElementsByTagName('h2')[i];
        header2.style.textTransform='capitalize';
        header2.style.textAlign='justify';
    }
}
function openweather()
{
    var lat;
    var lon;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=8af27856c4370f540adb778898c834f9')
    .then(response => response.json())
    .then(data => {
        lat=data.coord.lat;
        lon=data.coord.lon;
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid=8af27856c4370f540adb778898c834f9')
        .then(response => response.json())
        .then(data => {
            var tempmin = new Array();
            var tempmax = new Array();
            var winddeg = new Array();
            var windspd = new Array();
            var humid = new Array();
            var cloudiness = new Array();
            var rainchances = new Array();
            var code = new Array();
            var weatherdescription = new Array();
            for(var i=0;i<4;i++)
            {
                tempmin.push(data.daily[i].temp.min-273);
                rainchances.push(data.daily[i].pop);
                tempmax.push(data.daily[i].temp.max-273);
                winddeg.push(data.daily[i].wind_deg);
                windspd.push(data.daily[i].wind_speed);
                cloudiness.push(data.daily[i].clouds);
                humid.push(data.daily[i].humidity);
                weatherdescription.push(data.daily[i].weather[0].description);
                code.push(data.daily[i].weather[0].icon)
            }
            printweather1(tempmin,tempmax,winddeg,windspd,humid,cloudiness,rainchances,weatherdescription,code);
        })
    })
    .catch(err => alert("Wrong City!"))  
}
function weatherbit()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=8af27856c4370f540adb778898c834f9')
    .then(response => response.json())
    .then(data => {
        lat=data.coord.lat;
        lon=data.coord.lon;
        fetch('https://api.weatherbit.io/v2.0/forecast/daily?lat='+lat+'&lon='+lon+'&key=138116ec44294ab7a8790e0d451c3c56')
         .then(response => response.json())
         .then(data => {
            var tempmin = new Array();
            var tempmax = new Array();
            var winddeg = new Array();
            var windspd = new Array();
            var humid = new Array();
            var cloudiness = new Array();
            var rainchances = new Array();
            var code = new Array();
            var weatherdescription = new Array();
            for(var i=0;i<4;i++)
            {
                tempmin.push(data.data[i].min_temp);
                rainchances.push(data.data[i].pop);
                tempmax.push(data.data[i].max_temp);
                winddeg.push(data.data[i].wind_dir);
                windspd.push(data.data[i].wind_spd);
                cloudiness.push(data.data[i].clouds);
                humid.push(data.data[i].rh);
                code.push(data.data[i].weather.icon);
                weatherdescription.push(data.data[i].weather.description);
            }
            printweather2(tempmin,tempmax,winddeg,windspd,humid,cloudiness,rainchances,weatherdescription,code);
        })
    })
}

