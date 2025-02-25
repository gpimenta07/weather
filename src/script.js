

const key = "b1bb660f03946f4b66d7383014441369";

function showApi(dados) {
  document.querySelector("#city").innerHTML = dados.name;
  document.querySelector("#celsius").innerHTML = Math.floor(dados.main.temp) + '°C';
  document.querySelector("#humidity").innerHTML =
    "Umidade: " + dados.main.humidity + "%";
  document.querySelector("#description").innerHTML =
    dados.weather[0].description;
  console.log(dados);
}

async function weatherApi(inputValue) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());

  showApi(dados);
}

function searchButton() {
  const inputValue = document.querySelector("#inputCity").value;
  weatherApi(inputValue);
}
