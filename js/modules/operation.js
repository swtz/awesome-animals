export default class Operation {
  constructor(operation, days, hours) {
    this.operation = document.querySelector(operation);
    this.weekDays = operation.getAttribute(days);
    this.weekHours = operation.getAttribute(hours);
  }

  const now = new Date();

  const arrayDays = weekDays.split(',').map(Number);
  const arrayHours = weekHours.split(',').map(Number);

  const isOperationHour = (now.getHours() >= arrayHours[0] && now.getHours() < arrayHours[1]);
  const isOperationDay = arrayDays.includes(now.getDay());

  init() {
    if (isOperationDay && isOperationHour) {
      operation.classList.add('active');
    }
  }
}
