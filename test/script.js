fetch('"https://api.github.com/users/adion81"')
    .then(response => response.json())
    .then(coderData => console.log(coderData))
    .catch(err => console.log(err))

async function getCoderData() {
    var response = await fetch("https://api.github.com/users/adion81")
    var coderData1 = await response.json()
    return coderData1
}


