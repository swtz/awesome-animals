export default function initOperation() {
  const weekOperation = document.querySelector('[data-week]');
  const weekDays = weekOperation.getAttribute('data-week');
  const weekHours = weekOperation.getAttribute('data-hour');

  const now = new Date();

  const arrayDays = weekDays.split(',').map(Number);
  const arrayHours = weekHours.split(',').map(Number);

  const isOperationHour = (now.getHours() >= arrayHours[0] && now.getHours() < arrayHours[1]);
  const isOperationDay = arrayDays.includes(now.getDay());

  if (isOperationDay && isOperationHour) {
    weekOperation.classList.add('active');
  }
}
