const inp=document.getElementById("inp");
const btn=document.getElementById("btn");

btn.addEventListener('click',()=>{
    const cityName=inp.value;
    console.log(cityName);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8a677baf55cc06883375c3b97345bb9b`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            const MaxTemp=data.main.temp_max;
            const MinTemp=data.main.temp_min;
            const temperature=parseInt(data.main.temp-273.13);
            const name=data.name;
            const weathcond=data.weather[0].description;
            console.log(data);
            document.getElementById('city_name').innerHTML=name;
            document.getElementById('max').innerHTML=MaxTemp;
            document.getElementById('min').innerHTML=MinTemp;
            document.getElementById('temp').innerHTML=temperature;
            document.getElementById('weather').innerHTML=weathcond;

            document.getElementById('icon').src="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
  
        })
        .catch((err)=>{
            console.log("somthing went wrong");
        })

    inp.value="";
})









