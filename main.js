let input = document.getElementById("input");
let button = document.getElementById("B");
let cityName = document.getElementById("ville");
let date = document.getElementById("date");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let temp = document.getElementById("temp");
let weather = document.getElementById("weather");




button.addEventListener("click", () => {
    let city = input.value;

    conectIpA(city);
});

function conectIpA(city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&appid=727241f8a93f7531a36c97c99c903101&units=metric"
    )
        .then((res) => res.json())

        .then((data) => {

            if (data.cod == '404') {
                alert("city not found")
                 return;


            }           
          
            cityName.innerHTML = data.name;
            humidity.innerHTML = data.main.humidity;
            wind.innerHTML = data.wind.speed;
            temp.innerHTML = data.main.temp;
            weather.innerHTML = data.weather[0].description;
            let conditions = data.weather[0].main.toLowerCase();
            
            let iconPicture = {
                rain:"animated/rainy.svg",
                clear:"animated/day.svg",
                snow:"animated/snowy.svg",
                thunder:"animated/thunder.svg",
                clouds:"animated/cloudy.svg",
            }
            let iconSRc = iconPicture[conditions] || "animated/day.svg";
            document.querySelector(".picture").src = iconSRc;
        })
        
}

let change = document.getElementById("night")
let info = document.querySelector(".info")
let box = document.querySelector(".box")



let modedark = false;
function modeDarkAndLight(){
    let back = document.querySelector("body");
    let back1 = document.querySelector(".info");
    let back2 = document.querySelector(".box");
    let button = document.querySelector("#night");
  

    if(modedark == false){
        modedark = true;
        back.style.backgroundImage = 'url("look.jpg")';
        back1.style.backgroundColor = 'rgb(162 176 221)';
        back2.style.backgroundColor = 'rgb(162 176 221)';
        button.textContent = 'Day Mood';
        
    }else{
        modedark = false;
        back.style.backgroundImage = 'url("img.png")';
        back1.style.backgroundColor = 'rgb(224 231 239)';
        back2.style.backgroundColor = 'rgb(224 231 239)';
        button.textContent = 'Night Mood';
        
    }
}
