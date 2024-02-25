document.getElementById('getApi').addEventListener('click', getApi);
const apiId= '0109f3addacd4d208c164738242502';
function getApi() {
    var CityName = document.getElementById('cityName').value;
console.log(CityName)
const url = `http://api.weatherapi.com/v1/current.json?key=${apiId}&q=${CityName}&aqi=yes`;
console.log(url);
fetch(url)
    .then((res) => res.json())
    .then((data) => {
      
            let output = `
                <div>
                    <div style="" class="p-3">        
                        <p class="m-0" style="font-width:bold; font-size:2rem;">${data.location.name}</p>
                        <p class="m-0" style="font-width:bold; font-size:4rem;"> ${data.current.temp_c}<sup>°C</sup></p>
                    </div>
                </div>
                `;
            document.getElementById('output').innerHTML = output;
        console.log('printing data', data);
    }).catch((err) => console.log(err))
}