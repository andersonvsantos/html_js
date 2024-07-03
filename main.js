const form = document.getElementById('formNumbers');
const fieldA = document.getElementById('fieldA');
const fieldB = document.getElementById('fieldB');
const messageField = document.getElementById('message');

const successMessage = 'Fomulário enviado com sucesso!';
const errorMessage = 'O valor do campo B deve ser maior que o A!';

function clearClass() {
    messageField.classList.remove('success-message');
    messageField.classList.remove('error-message');
    fieldA.classList.remove('a-bigger');
    //Limpa todas as classes do código para evitar que tenhamos um bug visual.
}

function verifySize(num1, num2) {
    clearClass();
    
    if (parseInt(num2) > parseInt(num1)) {
        //É necessário a conversão dos valores pois o input gera um valor string quando solicitamos.
        messageField.innerHTML = successMessage;
        messageField.classList.add('success-message');

        fieldA.value = '';
        fieldB.value = '';

    } else {
        messageField.innerHTML = errorMessage;
        messageField.classList.add('error-message');
        fieldA.classList.add('a-bigger');
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    verifySize(fieldA.value, fieldB.value);
});
