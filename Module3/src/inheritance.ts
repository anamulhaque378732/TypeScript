// Inheritance : A manager is an employee with an additional resposibility.

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
}

class Manager extends Employee {
  teamMemberCount: number;

  constructor(name: string, baseSalary: number, teamMemberCount: number) {
    super(name, baseSalary);
    this.teamMemberCount = teamMemberCount;
  }

  describeWork(): string {
    return `${this.name} manager mange ${this.teamMemberCount}`;
  }

  describeManager(): string {
    // access this
    return `${this.name} earns ${this.salary}`;
    //   dont access
    // return `${this.name} earns ${this.baseSalary}`;
  }
}

// sort hand

class Manager2 extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    public teamMemberCount: number,
  ) {
    super(name, baseSalary);
  }
}

const employee = new Employee("Anamul", 250000);
// console.log(employee);

const manager = new Manager("Mizam", 2000, 85);
// console.log(manager);

//take  parent class "describe"

// console.log(manager.describe());

// console.log(manager.describeWork());
