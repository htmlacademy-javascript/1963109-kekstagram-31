// функиця для проверки длины строки
// eslint-disable-next-line no-unused-vars
const StrLength = function (string, maxLength) {
  if (string.length <= maxLength) {
    return console.log(true);
  }
  return console.log(false);
};
//Функция для проверки, является ли строка палиндромом.
const StrPal = function (str) {
  str.replaceAll(' ', '');
  const nns = str.toLowerCase();
  let reverseSrt = '';

  // eslint-disable-next-line for-direction
  for (let i = nns.length - 1; i <= nns[0]; i--) {

    reverseSrt += nns[i];
  }
  if (reverseSrt === nns) {
    return console.log(true);
  }
  return console.log(false);
};
StrPal('топот');
StrPal('Кекс');

//доп задание извллечение числа
const getNum = function (str) {
  let reserv = '';
  const normStr = str.toString();
  for (let i = 0; i <= normStr.length - 1; i++) {
    if ((Number.isNaN(parseInt(normStr[i], 10))) === false){ //проверка каждого символа на NaN
      reserv += parseInt(normStr[i], 10);
    }
  }
  const reservf = parseInt(reserv, 10);
  if (Number.isNaN(reservf)) {
    return console.log('NaN');
  }
  return console.log(reservf);
};

getNum('01ке2фир,05 батона');
