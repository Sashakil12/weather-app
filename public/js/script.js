console.log('client side js connected')

const form = document.querySelector('form');
const input = document.querySelector('#address')
const disp = document.querySelector('#disp')
const weatherArea = document.querySelector('.disp-w')
const animation = document.querySelector('#anim')
const row1 = document.querySelector('#a')
const row2 = document.querySelector('#b')
const row3 = document.querySelector('#c')
const row4 = document.querySelector('#d')
const row5 = document.querySelector('#e')
const row6 = document.querySelector('#f')
const row7 = document.querySelector('#g')
const row8 = document.querySelector('#h')
const row9 = document.querySelector('#i')
const row10 = document.querySelector('#j')
const row11 = document.querySelector('#k')
const row12 = document.querySelector('#l')
const row13 = document.querySelector('#m')
const row14 = document.querySelector('#n')
const row15 = document.querySelector('#o')
window.onload = function () {
    animation.classList.toggle('hidden');
    weatherArea.classList.toggle('hidden');
    var i = Math.floor(Math.random()*5);
    // document.body.style.backgroundImage = "url(/img/bg-"+i+".jpg)";
    this.document.querySelector('body').style.backgroundImage = "url(/img/bg-" + i + ".jpg)";
};



form.addEventListener('submit', (e) => {
    e.preventDefault()
    animation.classList.toggle('hidden')
    const address = input.value;
    input.value = '';
    const url = '/weather?address=' + address;
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                animation.classList.add('hidden');
                weatherArea.classList.remove('hidden')
                row1.textContent = "Error occured: " + " " + data.error;
                const rows = document.querySelectorAll('.row')
                for (var i = 1; i < rows.length; i++) {
                    rows[i].textContent = ''
                    rows[i].style.display = 'none'    
                       }
            } else {
                const rows = document.querySelectorAll('.row')
                for (var i = 0; i < rows.length; i++) {
                    rows[i].textContent = ''
                    rows[i].style.display = 'block'    
                       }
                animation.classList.add('hidden')
                weatherArea.classList.remove('hidden')
                row1.textContent = "Showing results for: " + data.placeName;
                row2.textContent = "It's, " + data.data.temperature + " here"
                row3.textContent = "Todays temperature: " + data.data.temperature;
                row4.textContent = "Feels Like, " + data.data.temperature;
                row5.textContent = "Dew point: " + data.data.dewPoint;
                row6.textContent = "Humidity: " + data.data.humidity;
                row7.textContent = "Air preassure: " + data.data.pressure;
                row8.textContent = "Wind Speed: " + data.data.windSpeed;
                row9.textContent = "Wind Gust: " + data.data.windGust;
                row10.textContent = "Wind Bearing: " + data.data.windBearing;
                row11.textContent = "Cloud: " + (data.data.cloudCover * 100) + " %";
                row12.textContent = "Ozone Density: " + data.data.ozone;
                if (data.data.precipProbability) {
                    row13.textContent = "Probability of rain: " + (data.data.precipProbability * 100);
                    row14.textContent = "Rain Intensity: " + data.data.precipIntensity;
                    row15.textContent = "Strom distance: " + data.data.nearestStormDistance;

                }


            }

        })
    })
})