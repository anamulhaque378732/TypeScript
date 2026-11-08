// TypeScript provide some type like as string, number, boolean, bigint, symbol, any, void, null, undefined, never, object, array etc.

//  Implicitly -->

const name1: string = "Anamul haque";
let number1: number = 10;
let isTrue: boolean = true;
let bigInt1: bigint = 1234n;

// number1 = "aaa"; // Don't assign  Error: Type 'string' is not assignable to type 'number'.

const addTwo = (a: number, b: number): number => {
  return a + b;
};

// console.log(addTwo(2000, 3000));

// console.log(name1, number1, isTrue, bigInt1);

// Array and tuple an readonly modifier

// Goood practice to use array type in two ways . 1st way is better adnd readable than 2nd way.

const arr: string[] = ["Anamul", "Haque", "Rifat", "Sakib", "Rana"];

// arr.push(14); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

const arr3: Array<string> = ["Anamul", "Haque", "Rifat", "Sakib", "Rana"];

const arr2: number[] = [1, 2, 3, 4, 5];

const arr4: Array<number> = [1, 2, 3, 4, 5];

// arr2.push("14"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// tuple is a fixed length array and can contain different types of data.

const tuple1: [string, number, boolean, bigint] = ["Anamul", 10, true, 1234n];

const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125]; // tuple is a fixed length array and can contain different types of data.

// readonly modifier is used to make the tuple immutable. It means we can't change the value of the tuple after it is created.

// dhakaLatLong.push(547.33); // Error: Property 'push' does not exist on type readonly '[number, number]'.

// dhakaLatLong[0] = 547.33; // Error: Index signature in type 'readonly [number, number]' only permits reading.

// function default parameters and optional parameters

const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) {
    return firstName;
  }
  return firstName + " " + lastName;
};

// const fullName2 = concatName("Anamul", "Haque");
// const fullName3 = concatName("Anamul");
// console.log(fullName3);

// Default parameter

const concatName2 = (firstName: string, lastName: string = "Haque"): void => {
  console.log(firstName + " " + lastName);
};

// console.log("Anamul", "haq");

// console.log(concatName2("Anamul"));

const greetings = (fullname: string, greeting = "Hello"): void => {
  console.log(greeting + " " + fullname);
};

// greetings("Anam");

// rest parameter (...args)

const sum = (...numbers: number[]): number => {
  return numbers.reduce((total, sum) => total + sum, 0);
};

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

const logUserAction = (...args: [name: string, age: number, bool: boolean]) => {
  const [name, age, bool] = args;

  console.log(
    "My name is",
    name,
    "I am now",
    age,
    "years old",
    "Is marrid",
    bool,
  );
};

logUserAction("Anamul", 25, true);

// object

const user: {
  name: string;
  age: number;
  isMarried: true;
  action: () => void;
} = {
  name: "Anamul",
  age: 25,
  isMarried: true,
  action: () => {
    console.log("My name is", user.name, "I am now", user.age, "years old");
  },
};

// use type alias to define the object type. It is a good practice to use type alias to define the object type.

type Address = {
  street: string;
  city: string;
  country: string;
};

type TUser = {
  name: string;
  age: number;
  isMarried: true;
  action: () => void;
  address: Address;
};

// use TUser type alias to define the object type.

const user2: TUser = {
  name: "Anamul",
  age: 25,
  isMarried: true,
  action: () => {
    console.log("My name is", user2.name, "I am now", user2.age, "years old");
  },
  address: {
    street: "123 Main St",
    city: "Dhaka",
    country: "Bangladesh",
  },
};

// user.email="anamul.haque@example.com"; // Error: Property 'email' does not exist on type 'User'.

// user2.address = "Dhaka"; // Error: Property 'address' does not exist on type 'User'.

// use typeinterface to define the object type. It is a good practice to use interface to define the object type.

interface IUser {
  name: string;
  age: number;
  isMarried: true;
  action: () => void;
}

//  type alias possible to use but interface is not possible to use.
type userName = string;

type userI = {
  name: userName;
};
