require('./index.css');
import { ServiceWeather } from './ServiceWeather';
import { UI } from './UI';
import { Store } from './Store';


const store = new Store();
const { city, countryCode } = store.getLocationData();
const ui = new UI();
const serviceWeather = new ServiceWeather(city, countryCode);
const submit = document.getElementById('w-change-btn');

async function fetchWeather() {
    const data = await serviceWeather.getWeather();
    ui.render(data);

    
}
submit.addEventListener('click', (e) => {
    const cityValue = document.getElementById('city').value;
    const countryCodeValue = document.getElementById('countryCode').value;
    serviceWeather.changeLocation(cityValue, countryCodeValue);
    store.setLocationData(cityValue, countryCodeValue);
    fetchWeather();
    e.preventDefault();

})
document.addEventListener('DOMContentLoaded', fetchWeather )