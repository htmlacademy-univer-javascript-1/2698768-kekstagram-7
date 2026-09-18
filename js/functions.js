//1 task
export function checkLengthString(str, maxLen)  {
  return (str.length <= maxLen);
}


//2 task
export function isPalindrom(str) {
  const normalized = str.replaceAll(' ', '').toLowerCase();
  let reversed = '';

  for (let i = normalized.length - 1; i >=0; i--) {
    reversed += normalized[i];
  }
  return normalized === reversed;
}


//3 task
export function makeNumber(str) {
  let digits = '';

  for(let i = 0; i < str.length; i++){
    if (!Number.isNaN(parseInt(str[i], 10))){
      digits+= str[i];
    }
  }
  return parseInt(digits, 10);
}

