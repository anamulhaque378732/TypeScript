// Encapsulation

// class Employee {
//   name: string;
//   #baseSalary: number;

//   constructor(name: string, baseSalary: number) {
//     ((this.name = name), (this.#baseSalary = baseSalary));
//   }
// }

// const employee1 = new Employee("anamul", 20000);
// const employee2 = new Employee("Sumona", 25000);

// don't modify outside of class
// employee1.#baseSalary = -500;

// access modifire

// public : When you write "public" first of class elemnt.this is pulic property
// When you write "public" first of class elemnt.this is pulic property

//  Private : When you write "Private" first of class elemnt. this is private  property

// Protected : When you write "Protected" first of class elemnt.this is  Protected property

// readonly

class Employee {
  public name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    ((this.name = name), (this.baseSalary = baseSalary));
  }
}

const employee1 = new Employee("anamul", 20000);
const employee2 = new Employee("Sumona", 25000);

// Property baseSalary is private and only accessible within class

// employee1.baseSalary =500

// sort hand
class Employee2 {
  constructor(
    public name: string,
    private baseSalary: number,
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
}

const employee3 = new Employee2("Anamul", 2540);

employee3.salary = 3000;
// console.log(employee3);
