fetch('http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=1d356b0e746448c81fff5fcca59ee2cb')
    .then(response => response.json())
    .then(coderData => console.log(coderData))
    .catch(err => console.log(err)) 


async function getCoderData() {
    var response = await fetch("https://api.github.com/users/adion81")
    var coderData1 = await response.json()
    return coderData1
}


