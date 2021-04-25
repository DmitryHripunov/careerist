const FORM_DATE = {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
};

const DECL_HOUR = ['час', 'часа', 'часов'];
const DECL_MINUTE = ['минута', 'минуты', 'минут'];
  
function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};
  
function printDate() {
  const date = new Date();
  const hours = date.getHours();
  const year = date.getFullYear();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const stringHours = declOfNum(hours, DECL_HOUR);
  const stringMinute = declOfNum(minutes, DECL_MINUTE);

  return `Дата публикации: 
    ${date.toLocaleString('ru-RU', FORM_DATE) }
    ${year} года 
    ${hours} ${stringHours}  
    ${minutes} ${stringMinute}`
};

export default printDate;