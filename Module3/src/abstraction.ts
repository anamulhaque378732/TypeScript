// abstraction : Every employee must define how their pay is calculate

abstract class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }

  abstract calculatePay(): number;
  abstract getResousces(): string[];
  abstract registerEntryTime(): string;
}

// Cannot create an instance of an abstract class.
// const employee = new Employee("Anamul", 2500);

class Manager extends Employee {
  calculatePay() {
    return this.baseSalary + 5000;
  }
  getResousces() {
    return ["4", "6"];
  }
  registerEntryTime() {
    return "7.45";
  }
}
class Developer extends Employee {
  calculatePay() {
    return this.baseSalary + 3000;
  }

  getResousces() {
    return ["4", "6"];
  }
  registerEntryTime() {
    return "7.45";
  }
}
