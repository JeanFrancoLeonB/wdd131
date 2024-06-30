const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

document.querySelector("#lastupdated").textContent = `Last Modification: ${document.lastModified}`;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


function calculateWindChill(temperature, windSpeed, units = 'metric') {
    const isValidMetric = units === 'metric' && temperature <= 10 && windSpeed > 4.8;
    const isValidImperial = units === 'imperial' && temperature <= 50 && windSpeed > 3;

    if (isValidMetric || isValidImperial) {
        const windChill = units === 'metric' ?
            13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16) :
            35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        
        return windChill;
    } else {
        return "N/A";
    }
}

// Example usage:
let temperature = 5;  // Celsius
let windSpeed = 10;   // km/h
let units = 'metric';

let result = calculateWindChill(temperature, windSpeed, units);
console.log(result);  // This will log the calculated wind chill factor or "N/A" if conditions are not met