/* eslint-disable max-len */
const button = document.querySelector('#btn');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const submitBtn = document.getElementById('submit-btn');

function alertaBotao() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', alertaBotao);

function habilitaEnviar() {
  const agreement = document.getElementById('agreement');
  agreement.addEventListener('change', () => {
    submitBtn.disabled = !agreement.checked;
  });
}
habilitaEnviar();

const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
function contaCaracter(event) {
  const caracter = event.target;
  const contador = 500 - caracter.value.length;
  counter.innerText = contador;
}

textArea.addEventListener('input', contaCaracter);

const forms = document.getElementById('evaluation-form');
const fD = document.getElementById('form-data');
const test = document.querySelectorAll('input[name="subject"]');
const rate = document.querySelector('#receive-avaliation');
const family = document.querySelector('#receive-family');

function mostraForms() {
  submitBtn.addEventListener('click', (event) => {
    forms.style.display = 'none';
    event.preventDefault();
    fD.style.display = 'block';
    fD.children[0].children[0].innerText = `${forms[0].value} ${forms.elements[1].value}`;
    fD.children[2].children[0].innerHTML = forms.elements[2].value;
    fD.children[4].children[0].innerHTML = forms.elements[3].value;
    family.innerHTML = document.querySelector('input[name="family"]:checked').value;
    const values = [];
    for (let i = 0; i < test.length; i += 1) {
      if (test[i].checked === true) {
        values.push(` ${test[i].value}`);
      }
    }
    fD.children[8].children[0].innerHTML = values;
    rate.innerHTML = document.querySelector('input[name="rate"]:checked').value;
    fD.children[12].children[0].innerHTML = forms.elements[23].value;
  });
}
mostraForms();
