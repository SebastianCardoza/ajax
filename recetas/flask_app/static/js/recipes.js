var recipeTable = document.querySelector('#recipeTable')
var newRecipe = document.querySelector('#newRecipe')
var recipeMessages = document.querySelector('#recipeMessages')
var user_id = 0;
function deleteRecipe(id){
    fetch(`/delete/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        getRecipes()
    })
}
function getRecipes(){
    fetch('/get_recipes')
    .then(response => response.json())
    .then(data => {
        recipeTable.innerHTML = ''
        user_id = data.id
        recipes = data.recipes
        for (let i = 0; i<recipes.length; i++){
            var row = document.createElement('tr');

            let name = document.createElement('td')
            name.innerHTML = recipes[i].name
            row.appendChild(name)
            let under_30 = document.createElement('td')
            under_30.innerHTML = recipes[i].under_30
            row.appendChild(under_30)
            let creator_name = document.createElement('td')
            creator_name.innerHTML = recipes[i].creator_name
            row.appendChild(creator_name)
            let actions = document.createElement('td')
            actions.innerHTML = `<a href="/recipes/${recipes[i].id}">View Recipe</a>`
            if (user_id == recipes[i].user_id){
                actions.innerHTML = `<a href="/recipes/${recipes[i].id}">View Recipe</a>
                <span> | </span><a href="/recipes/edit/${recipes[i].id}">Edit</a>
                <span> | </span><a onclick="deleteRecipe(${recipes[i].id})">Delete</a>
                `
            }
            row.appendChild(actions)
            recipeTable.appendChild(row)
        }
    })
}
getRecipes()
newRecipe.onsubmit = function(e) {
    e.preventDefault()
    var form = new FormData(this)
    fetch('process', {method:'POST', body: form})
    .then(response => response.json())
    .then(data => {
        recipeMessages.innerHTML = ''
        if ('validated' in data){
            getRecipes()
            newRecipe.reset()
        } else {
            console.log(data);
            for (let i = 0; i<data.length; i++){
                let message = document.createElement('p');
                message.innerHTML = data[i]
                message.classList.add('text-danger');
                recipeMessages.appendChild(message);
            }
        }
    })
}
