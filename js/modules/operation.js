export default class Operation {
  constructor(operation, days, hours, className) {
    this.operation = document.querySelector(operation);
    this.weekDays = this.operation.getAttribute(days);
    this.weekHours = this.operation.getAttribute(hours);
    this.activeClass = className;
  }

  // gets current date and creates 'now' property.
  setCurrentDate() {
    this.now = new Date();
  }

  // transforms 'weekDays' and 'weekHours' in array of numbers.
  setOperation() {
    this.operationDays = this.weekDays.split(',').map(Number);
    this.operationHours = this.weekHours.split(',').map(Number);
  }

  // checks if current hour is within the operation hours.
  // checks if current day is within the operation days
  // and return the boolean result with 'AND' operator.
  isOperating() {
    const isOperationHour = (
      this.now.getHours() >= this.operationHours[0]
      && this.now.getHours() < this.operationHours[1]
    );
    const isOperationDay = this.operationDays.includes(this.now.getDay());

    return (isOperationDay && isOperationHour);
  }

  // if 'isOperating' returns 'true', add the class
  // to the 'this.operation' pseudo-element.
  setOperationStatus() {
    if (this.isOperating()) this.operation.classList.add(this.activeClass);
  }

  init() {
    if (this.operation && this.weekDays && this.weekHours) {
      this.setCurrentDate();
      this.setOperation();
      this.setOperationStatus();
    }
    return this;
  }
}
