// Reference of Input Tags
const inputName = document.getElementById('input-name');
const cardNumber = document.getElementById('card-number');

// Reference to cards
const panNumber = document.getElementById('panNumber');
const textName = document.getElementById('persons-card-name');
const monthText = document.getElementById('monthText');
const yearText = document.getElementById('yearText');

inputName.addEventListener('input', () => {
  textName.textContent = inputName.value.toUpperCase();
  if (inputName.value.trim() === '') {
    textName.innerText = 'Jane Appleseed';
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
});
