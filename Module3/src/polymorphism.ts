// polymorphism : Different employee respond differently to the same method call

class Employee {
  constructor(
    public name: string,
    protected baseSalary: number,
  ) {}

  // get
  get salary(): number {
    return this.baseSalary;
  }

  get slarayWithBonas(): number {
    return this.baseSalary + 2000;
  }

  // set
  set salary(newSalaray: number) {
    if (newSalaray < 0) {
      throw new Error("Salary can not be negative value");
    }
    this.baseSalary = newSalaray;
  }
  // action perfiom
  describe(): string {
    return `${this.name} earns ${this.baseSalary}`;
  }

  calculatePay(taxRate: number) {
    return this.baseSalary - this.baseSalary * taxRate;
  }
}

class Manager extends Employee {
  override calculatePay() {
    return this.baseSalary + 5000;
  }
}

class Develper extends Employee {
  constructor(
    public name: string,
    protected baseSalary: number,
    public type: string,
  ) {
    super(name, baseSalary);
  }

  override calculatePay(taxRate: number) {
    return this.baseSalary + 3000 - this.baseSalary * taxRate;
  }
}

const employee = new Employee("anamul", 25000);
// console.log(employee.calculatePay(0.2));

const manager = new Manager("Sumona", 25400);

// console.log(manager.calculatePay());

const developer = new Develper("Anamul", 254000, "backed");
console.log(developer.calculatePay(0.1));
