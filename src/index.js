let now = new Date();
let currentHour = now.getHours();
let currentMin = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];
let timeLine = `${currentDay} ${currentHour}:${currentMin}`;

let timeShow = document.querySelector("#current-time");
timeShow.innerHTML = `${timeLine}`;

let description = document.querySelector("weather-podrobno");
let apiKey = "8edd95775ec5d6f28bc3fcb0277e2223";

function submit(event) {
  event.preventDefault();
  let InputCity = document.querySelector("#city-input");
  let city = InputCity.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
function showTemp(response) {
  let tempInPosition = response.data.main.temp;
  let temp = document.querySelector("#temp-api");
  temp.innerHTML = `${Math.round(tempInPosition)} °C`;
  OutputCity.innerHTML = response.data.name;
}
let formTwo = document.querySelector("#signup-form");
formTwo.addEventListener("submit", submit);
let OutputCity = document.querySelector("#display-city");
