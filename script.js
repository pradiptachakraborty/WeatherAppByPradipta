//Mode changing code - Pradipta Chakraborty
let modeBtn=document.querySelector(".mode");
let body=document.querySelector("body");
let currMode="light";
modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        console.log("dark");
        body.style.backgroundColor="black";
        body.style.color="white";
    }else{
        currMode="light"
        console.log("light");
        body.style.backgroundColor="#6cb3e2";
        body.style.color="black";
    }
});
//Fetching Weather data code - Pradipta Chakraborty
let inputBox=document.querySelector(".input-box");
let searchBtn=document.querySelector("#search-button");//getElementById("search-button");
let voiceSearchBtn=document.querySelector("#voice-search-button");
let weatherImg=document.querySelector(".weather-img");
let temperature=document.querySelector(".temperature");
let humidity=document.querySelector(".htext");
let description=document.querySelector(".description");
let windSpeed=document.querySelector(".wtext");
let weather_body=document.querySelector(".weather-body");

async function checkWeather(city){
    const api_key = "fff38e25c599502eb8d59c39e66d3347";
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data=await fetch(`${url}`).then(response => response.json());

    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                // If the response is not OK, throw an error with details
                throw new Error(`City not found or spelling is not right: ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error=>{
            console.error('Fetch Error:', error);
            alert(`Unable to fetch weather details: ${error.message}`);
        })
    //console.log(weather_data);
    //to show the value - pradipta
    temperature.innerHTML=`${(weather_data.main.temp-273.15).toFixed(2)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`<b>${weather_data.main.humidity}%</b><br>humidity`;
    windSpeed.innerHTML=`<b>${weather_data.wind.speed}Km/Hr</b><br>Wind Speed`;

    /*to show the weatger body after first search - pradipta*/
    weather_body.style.display="flex";
    //to change the image
    switch(weather_data.weather[0].description){
        case 'clouds':
            weatherImg.src="./assets/cloud.png";
            break;
        case 'clear sky':
            weatherImg.src = "./assets/clear.png";
            break;
        case 'rain':
            weatherImg.src = "./assets/rain.png";
            break;
        case 'mist':
            weatherImg.src = "./assets/mist.png";
            break;
        case 'haze':
            weatherImg.src = "./assets/Haze.png";
            break;
        case 'snow':
            weatherImg.src = "./assets/snow.png";
            break;
        case 'broken clouds':
        case 'scattered clouds':
            weatherImg.src = "./assets/BrokenClouds.png";
            break;
        case 'overcast clouds':
            weatherImg.src = "./assets/overcastclouds.png";
            break;
        case 'few clouds':
            weatherImg.src = "./assets/fewClouds.png";
            break;
        case 'smoke':
            weatherImg.src = "./assets/smoke.png";
            break;
    }
}
//to add the event after clicking search button - Pradipta
searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
});


//Speech to text converter - Pradipta
// Get references to the input box and microphone button
const inputLoc = document.getElementById('inputLoc');
const vsBtn = document.getElementById('vsBtn');

// Check if the browser supports the SpeechRecognition API
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // Set recognition properties
    recognition.lang = 'en-US'; // Set language to English (US)
    recognition.interimResults = false; // Show only final results
    recognition.maxAlternatives = 1; // Number of recognition alternatives

    // Event listener for when speech is successfully recognized
    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript; // Get the transcribed text
        inputLoc.value = speechResult; // Display it in the text box
    };

    // Event listener for errors
    recognition.onerror = (event) => {
        console.error('Speech Recognition Error:', event.error);
        alert('Speech recognition error: ' + event.error);
    };

    // Event listener for microphone button click
    vsBtn.addEventListener('click', () => {
        recognition.start(); // Start speech recognition
        console.log('Listening for speech...');
    });
} else {
    // If SpeechRecognition API is not supported
    alert('Speech Recognition API is not supported in this browser.');
}
