async function getCoderData() {
    username = document.querySelector('#username').value
    var response = await fetch(`https://api.github.com/users/${username}`)
    var coderData = await response.json()
    document.querySelector('#followers').innerText = `User ${coderData.login} has ${coderData.followers} followers`
    document.querySelector('#pfp').src = coderData.avatar_url
}

function updatePage() {
    getCoderData()
    // console.log(coderData)
    // document.querySelector('#followers').innerText = `User ${coderData.login} has ${coderData.followers}`
    // document.querySelector('#pfp').src = coderData.avatar_url
}