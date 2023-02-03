//api.openweathermap.org / data / 2.5 / forecast ? lat = { 28.5384 } & lon={ 81.3789 }& appid={API key }


fetch('api.openweathermap.org/data/2.5/forecast?lat=28.5384& lon=81.3789&appid={28c3589b9ea291ef8351565407890153}&units=imperial', {
    method: 'POST'
})
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

