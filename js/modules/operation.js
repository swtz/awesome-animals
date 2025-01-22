export default class Operation {
  constructor(operation, days, hours, className) {
    this.operation = document.querySelector(operation);
    this.weekDays = this.operation.getAttribute(days);
    this.weekHours = this.operation.getAttribute(hours);
    this.activeClass = className;
  }

  setCurrentDate() {
    this.now = new Date();
  }

  setOperation() {
    this.operationDays = this.weekDays.split(',').map(Number);
    this.operationHours = this.weekHours.split(',').map(Number);
  }

  isOperating() {
    const isOperationHour = (
      this.now.getHours() >= this.operationHours[0]
      && this.now.getHours() < this.operationHours[1]
    );
    const isOperationDay = this.operationDays.includes(this.now.getDay());

    return (isOperationDay && isOperationHour);
  }

  init() {
    if (this.operation && this.weekDays && this.weekHours) {
      this.setCurrentDate();
      this.setOperation();
      console.log(this.isOperating());
      if (this.isOperating()) {
        this.operation.classList.add(this.activeClass);
      }
    }
  }
}
