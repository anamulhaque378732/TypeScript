// type alias vs interface

// 1. Interface s genarally connected to Objects
// 2.  type alias is more connected to literal , unions , tuples, primitives

type id = number;

// not possible by use interface

// interface id number

type Role = "admin" | "member";

// not possible by interface

// interface "admin" | "member"

// possible to interface

interface User {
  name: string;
  id1: number;
  ids: id;
  role: "admin" | "member";
}

const user: User = {
  name: "Anamul haque",
  id1: 15,
  ids: 14,
  role: "admin",
};

// type alias

type Vehicals = {
  brand: string;
};
type Car = Vehicals & {
  // intersection "&" symble use to perform interscetion
  model: string;
};
const car: Car = {
  model: "Corolla",
  brand: "Toyota",
};

// When same name two type they are duplicate each others and don't recommanded or not possible

type TEmployee = {
  name: string;
};

// Duplicate identifier 'TEmployee

// type TEmployee = {
//   id: number;
// };

/** Benifits of interface
 * 1. Extent interface
 * 2.Merge interface
 */

interface Animal {
  species: string;
}

interface Cat extends Animal {
  breed: string;
}

const cat: Cat = {
  species: "Felix catus",
  breed: "Persian",
};

// when same name 2 interface they are merge

interface Employee {
  name: string;
}

interface Employee {
  id: number;
}

const employee: Employee = {
  id: 14,
  name: "anamul",
};
