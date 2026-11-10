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


function makeHoursInMinutes(str) {
  const [hours, minutes] = str.split(':').map(Number);
  return hours * 60 + minutes;
}
/* eslint-disable no-unused-vars */
function isMeetingInWorkday(workStart, workEnd, meetingStart, meetingDuration) {
  const workStartMin = makeHoursInMinutes(workStart);
  const workEndMin = makeHoursInMinutes(workEnd);
  const meetingStartMin = makeHoursInMinutes(meetingStart);
  const meetingEndMin = meetingStartMin + meetingDuration;

  return (meetingStartMin >= workStartMin && meetingEndMin <= workEndMin);
}

