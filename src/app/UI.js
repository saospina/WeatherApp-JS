/* File to handle DOM */

export class UI {
    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
    }

    render(data) {
        this.location.textContent = data.name + '/' + data.sys.country;
        this.desc.textContent = data.weather[0].description;
        this.string.textContent = data.main.temp + '°C';
        this.humidity.textContent = 'Humidity: ' + data.main.humidity + '%';
        this.wind.textContent = 'Wind: ' + data.wind.speed + 'm/s';
        
        

    }
}