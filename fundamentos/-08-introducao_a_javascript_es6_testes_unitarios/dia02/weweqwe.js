function verifyNumber (value1, value2) {
    if (isNaN(value1) || isNaN(value2)){
        throw new Error ('Valor(es) não numérico(s)')
    }
    if (!value1 || !value2) {
        throw new Error ('Preencha com valor(es) numérico(s)')
    }
}
function sum () {
    try {
         
        let value1 = document.getElementById('value1').value;
        let value2 = document.getElementById('value2').value;
        verifyNumber(value1, value2);
        let result = Number(value1) + Number(value2);
        document.getElementById('result').innerText = `Resultado é: ${result}`;
    } catch (erro) {
        document.getElementById('result').innerText = erro.message;
    } finally {
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }
}    



  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }