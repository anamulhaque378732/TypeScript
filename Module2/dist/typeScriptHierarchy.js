// top type
// any type
let hello = "Hello world";
hello = 1478;
// hello.length();
// unknown type
const anything = "Hello World";
// anything' is of type 'unknown' so don't  find length
// anything.length()
// core type
const num = 154;
const nam = "Anamul";
const number2 = 142n;
let replace;
replace = num;
let someThing;
replace = someThing;
const curresntUser = null;
let someStatus;
let status = "pending";
someStatus = status;
// unit type
const greet = () => {
    console.log("Hello");
};
replace = greet;
// Type 'void' is not assignable to type 'string'
// const greetings: string = greet();
// sub-type of unit type
const anotherGreed = () => {
    console.log("Hello Sumona");
    return;
};
// anotherGreed(); //undefined
// const greetings: void = anotherGreed();
// Bottom type (never)
// not possible to assagn
let nevenHappening;
export {};
// const getError = (meg: string) => {
//   throw new Error(meg);
// };
// const x: string = getError("abcd");
// const number5: number = 14;
