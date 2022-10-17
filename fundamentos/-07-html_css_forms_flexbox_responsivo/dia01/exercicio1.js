let button = document.getElementById('submitButton');
let pName = document.getElementById('firstName').value;

button.addEventListener('click', function(event){
    // event.preventDefault();
    alert(`Obrigado pelas informações, ${pName}`);
})