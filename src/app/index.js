import { ServiceWeather } from './ServiceWeather';
require('./index.css');

const serviceWeather = new ServiceWeather('London', 'uk');

async function fetchWeather() {
    const data = await serviceWeather.getWeather();
    console.log(data);
    
}
document.addEventListener('DOMContentLoaded', fetchWeather )