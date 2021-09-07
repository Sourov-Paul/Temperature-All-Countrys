const api_key = `536fc3043f8a189cb9e15051f0215ede`;
const hotTemp = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => displayTempereature(data))
        // error handeling
        .catch(error => error)

    // Error alert
    if (city.value === '') {
        alert('Please enter your location')
        return
    }
    // clear input field
    document.getElementById('city-name').value = '';
};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTempereature = tempereature => {
    console.log(tempereature);
    setInnerText('city', tempereature.name);
    setInnerText('condition', tempereature.weather[0].main);
    setInnerText('deg', tempereature.main.temp);

    // set weather icon 
    const url = `https://openweathermap.org/img/wn/${tempereature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

}





























































// const setInnerText = (id, text) => {
//     document.getElementById(id).innerText = text;
// }

// const displayTempereature = temperature => {
//     setInnerText('city', temperature.name);
//     console.log(temperature.name)
// }