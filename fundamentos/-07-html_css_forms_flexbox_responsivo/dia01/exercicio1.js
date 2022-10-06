let button = document.getElementById('submitButton');
let pName = document.getElementById('firstName')

button.addEventListener('click', function(event){
    event.preventDefault();
    alert(`Obrigado pelas informações, ${pName}`);
})