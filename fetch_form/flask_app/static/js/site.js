
function getUsers(){
    fetch('http://127.0.0.1:5000/users')
        .then(res =>  res.json())
        .then(data => {
            var users = document.getElementById('users');
            users.innerHTML = ''
            for( let i = 0; i < data.length; i++){
                let row = document.createElement('tr');

                let first_name = document.createElement('td');
                first_name.innerHTML = data[i].first_name;
                row.appendChild(first_name);
                
                let last_name = document.createElement('td');
                last_name.innerHTML = data[i].last_name;
                row.appendChild(last_name);
                
                let email = document.createElement('td');
                email.innerHTML = data[i].email;
                row.appendChild(email);
                users.appendChild(row);
            }
        })

}
getUsers();
// Enviar informacion de formulario para crear usuario
var myForm = document.querySelector('#myForm');
myForm.onsubmit = function(e) {
    e.preventDefault();
    var form = new FormData(myForm);
    fetch('http://127.0.0.1:5000/create/user', {method: 'POST', body: form})
        .then( response => response.json())
        .then( data => {
            console.log(data)
            getUsers()
        })
    myForm.reset()
}


