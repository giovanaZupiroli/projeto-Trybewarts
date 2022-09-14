const button = document.querySelector('#btn');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

function alertaBotao() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('mail ou senha inválidos.');
  }
}

button.addEventListener('click', alertaBotao);

function habilitaEnviar() {
  const submitBtn = document.getElementById('submit-btn');
  const agreement = document.getElementById('agreement');
  agreement.addEventListener('change', () => {
    submitBtn.disabled = !agreement.checked;
  });
}
habilitaEnviar();
