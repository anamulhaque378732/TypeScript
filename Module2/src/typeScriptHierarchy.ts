// top type

// any type

let hello: any = "Hello world";
hello = 1478;

// hello.length();
// unknown type

const anything: unknown = "Hello World";

// anything' is of type 'unknown' so don't  find length
// anything.length()

// core type

const num: number = 154;
const nam: string = "Anamul";
const number2: bigint = 142n;
let replace: unknown;
replace = num;

let someThing: void;
replace = someThing;

// Nullish types
interface User {
  name: string;
}

type loggedInUser = User | null;

const curresntUser: loggedInUser = null;

type Status = "pending" | "Success";

let someStatus: string;
let status: Status = "pending";

someStatus =  status;

// unit type

const greet = () => {
  console.log("Hello");
};

replace = greet;

// Type 'void' is not assignable to type 'string'

// const greetings: string = greet();

// sub-type of unit type

const anotherGreed = (): undefined => {
  console.log("Hello Sumona");
  return;
};
anotherGreed(); //undefined

const greetings: void = anotherGreed();

// Bottom type (never)

// not possible to assagn

let nevenHappening: never;

const getError = (meg: string) => {
  throw new Error(meg);
};

const x: string = getError("abcd");
const number5: number = 14;
