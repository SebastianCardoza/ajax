var cookie=document.querySelector(".cookie")
var cityh = document.querySelector('.city_header')
var c=[]
var f=[]
getTemps('burbank')
function accept(){
    cookie.remove()
}
async function getTemps(city) {
    if (city == 'burbank') {
        response = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=5331835&APPID=1d356b0e746448c81fff5fcca59ee2cb')
        cityh.innerText = 'Burbank'
    } else if (city == 'chicago') {
        response = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=4887398&APPID=1d356b0e746448c81fff5fcca59ee2cb')
        cityh.innerText = 'Chicago'
    } else {
        response = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=4684888&APPID=1d356b0e746448c81fff5fcca59ee2cb')
        cityh.innerText = 'Dallas'
    }
    weatherInfo = await response.json()
    c = []
    f = [0, 0, 0, 0, 0, 0, 0, 0]
    c.push(weatherInfo.list[0].main.temp_min, weatherInfo.list[0].main.temp_max, weatherInfo.list[8].main.temp_min, weatherInfo.list[8].main.temp_max, weatherInfo.list[16].main.temp_min, weatherInfo.list[16].main.temp_max, weatherInfo.list[24].main.temp_min, weatherInfo.list[24].main.temp_max)
    c.forEach(
        function(e, i) {
            c[i] = (e - 273.15).toFixed(2)
        }
    )
    f.forEach(
        function(e, i) {
            f[i] = ((c[i] * (9/5) + 32).toFixed(2))
        }
    )
    document.querySelector('#temperature').value = 'c'
    for (var i=0; i<8; i++){
        document.querySelector("#t"+i).innerText = c[i]+"°";
    }
}

function changeTemp(element){
    console.log(element.value);
    if (element.value == "c") {
        for (var i=0; i<8; i++){
            document.querySelector("#t"+i).innerText = c[i]+"°";
        }
    } else {
        for (var i=0; i<8; i++){
            document.querySelector("#t"+i).innerText = f[i]+"°";
        }
    }
}