const button = document.querySelector('#btn');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

function alertaBotao() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', alertaBotao);
