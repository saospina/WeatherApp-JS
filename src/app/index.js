require('./index.css');
import { ServiceWeather } from './ServiceWeather';
import { UI } from './UI';


const ui = new UI();
const serviceWeather = new ServiceWeather('Medellin', 'co');
const submit = document.getElementById('w-change-btn');

async function fetchWeather() {
    const data = await serviceWeather.getWeather();
    console.log(data);
    ui.render(data);

    
}
submit.addEventListener('click', (e) => {
    const cityValue = document.getElementById('city').value;
    const countryCodeValue = document.getElementById('countryCode').value;
    serviceWeather.changeLocation(cityValue, countryCodeValue);
    fetchWeather();
    e.preventDefault();

})
document.addEventListener('DOMContentLoaded', fetchWeather )