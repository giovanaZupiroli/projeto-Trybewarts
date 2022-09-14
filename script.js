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

function habilitaEnviar() {
  const submitBtn = document.getElementById('submit-btn');
  const agreement = document.getElementById('agreement');
  agreement.addEventListener('change', () => {
    submitBtn.disabled = !agreement.checked;
  });
}
habilitaEnviar();

// const textArea = document.getElementById('textArea');
// const spanRestante = document.getElementById('restante');
// const spanRestanteAuxiliar = parseInt(spanRestante.innerText, 10);
// textArea.addEventListener('', () => {
//   spanRestante.innerText = spanRestanteAuxiliar - (textArea.value.length + 1);
//   if (spanRestante.innerText === '-1') {
//     spanRestante.innerText = 0;
//   }
// });
