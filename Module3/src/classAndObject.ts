// class
// use typescript
// interface Employee {
//   name: string;
//   baseSalary: number;
// }
// const employee: Employee = {
//   name: "anamul",
//   baseSalary: 22000,
// };

// const employee2: Employee = {
//   name: "Sumona",
//   baseSalary: 22000,
// };

// basic class
// class Employee {
//   name: string = "Mr";
//   baseSalary: number = 22000;
// }

// const employee = new Employee();
// const employee2 = new Employee();
// console.log(employee,employee2);

// class with constractor

class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    ((this.name = name), (this.baseSalary = baseSalary));
  }
}

const employee1 = new Employee("anamul", 20000);
const employee2 = new Employee("Sumona", 25000);
// console.log(employee, employee2);
// console.log(employee1 instanceof Employee); //true
