var recipe_name = document.querySelector('#name')
var description = document.querySelector('#description')
var instructions = document.querySelector('#instructions')
var under_30 = document.querySelector('#under_30')
var cooked_date = document.querySelector('#cooked_date')
var recipe_id = document.querySelector('#recipe_id').value
var editRecipe = document.querySelector('#editRecipe')
var recipeMessages = document.querySelector('#recipeMessages')

function getRecipe(){
    console.log(recipe_id)
    fetch(`/get_recipe/${recipe_id}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        recipe_name.innerHTML = data.name
        description.innerHTML = data.description
        instructions.innerHTML = data.instructions
        under_30.innerHTML = data.under_30
        cooked_date.innerHTML = data.cooked_date
    })
}
getRecipe()
editRecipe.onsubmit = function(e) {
    e.preventDefault()
    var form = new FormData(this)
    fetch('/process', {method:'POST', body: form})
    .then(response => response.json())
    .then(data => {
        recipeMessages.innerHTML = ''
        if ('validated' in data){
            getRecipe()
            editRecipe.reset()
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
