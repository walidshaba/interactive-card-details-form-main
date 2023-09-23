// Reference of Input Tags
const inputName = document.getElementById('input-name');
const cardNumber = document.getElementById('card-number');
const month = document.querySelector('.grp input');
const year = document.querySelector('.grp input:last-of-type');
const cvcInput = document.getElementById('cvc');
const confirmButton = document.querySelector('button.field');
const continueButton = document.getElementById('continue-button');
const tnkContainer = document.querySelector('.thankyou-card');
const inputContainer = document.querySelector('form.inputs');
// Reference to cards
const panNumber = document.getElementById('panNumber');
const textName = document.getElementById('persons-card-name');
const monthText = document.getElementById('monthText');
const yearText = document.getElementById('yearText');
const cvcText = document.getElementById('cvc-text');
// Creating Error Message Tags
const nameError = document.createElement('p');
const cardNumberError = document.createElement('p');
const DateError = document.createElement('p');
const cvcError = document.createElement('p');

inputName.addEventListener('input', () => {
  textName.textContent = inputName.value.toUpperCase();
  if (inputName.value.trim() === '') {
    textName.innerText = 'Jane Appleseed';
  }
  if (!inputName.value.match(/^[_A-zA-Z]*((-|s)*[_A-zA-Z])*$/g)) {
    nameError.parentElement.append(nameError);
  }
});

cardNumber.addEventListener('input', () => {
  panNumber.textContent = cardNumber.value;

  //   if (cardNumber.value.length === 0) {
  //     panNumber.innerText = '0000 0000 0000 0000';
  //   } else {
  //     const inputValue = cardNumber.value.replaceAll(' ', '');
  //     if (cardNumber.value.length > 14) {
  //       cardNumber.value = inputValue.replace(
  //         /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
  //         '$1 $2 $3 $4'
  //       );
  //       panNumber.innerText = inputValue.replace(
  //         /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
  //         '$1 $2 $3 $4'
  //       );
  //     } else if (cardNumber.value.length > 9) {
  //       cardNumber.value = inputValue.replace(
  //         /(\d{4})(\d{4})(\d{0,4})/,
  //         '$1 $2 $3'
  //       );
  //       panNumber.innerText = inputValue.replace(
  //         /(\d{4})(\d{4})(\d{0,4})/,
  //         '$1 $2 $3'
  //       );
  //     } else if (cardNumber.value.length > 4) {
  //       cardNumber.value = inputValue.replace(/(\d{4})(\d{0,4})/, '$1 $2');
  //       panNumber.innerText = inputValue.replace(/(\d{4})(\d{0,4})/, '$1 $2');
  //     } else panNumber.innerText = inputValue;
  //   }
  //   (/^[0-9]+$/)
});

month.addEventListener('input', () => {
  monthText.textContent = month.value;
});

year.addEventListener('input', () => {
  yearText.textContent = year.value;
  if (year.value.length === 0) {
    yearText.textContent = '00';
  }
});

cvcInput.addEventListener('input', () => {
  cvcText.textContent = cvcInput.value;
  if (cvcInput.value.length === 0) {
    cvcText.textContent = '000';
  }
});

confirmButton.addEventListener('click', (e) => {
  e.preventDefault();
  tnkContainer.classList.add('active');
  inputContainer.classList.add('inactive');
});

continueButton.addEventListener('click', () => {
  tnkContainer.classList.remove('active');
  inputContainer.classList.remove('inactive');
});
