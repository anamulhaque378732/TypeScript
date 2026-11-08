// type of
let xx = null;
let x = ["123"];
// console.log(typeof x === "object", typeof xx === "object");

// type guard

const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};

const print2 = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value;
  } else {
    return value; //never
  }
};

// truthiness

type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const loggedInUser: User = {
  name: "Anamul",
  address: {
    street: "ABC",
  },
};

const showAddress = (user: User) => {
  if (user && user.address) {
    console.log(user.address.street);
  }

  throw new Error("User not found");
};

// some caveat of Type data

const printAll = (x: string | string[] | null) => {
  if (x && typeof x === "object") {
    for (let str of x) {
      console.log(str);
    }
  } else if (typeof x === "string") {
    console.log(x);
  } else {
    console.log("");
  }
};

// printAll(null);

// equality

const compare = (x: number | string, y: number | boolean) => {
  if (x === y) {
    console.log(x, y);
  }
};

const printAll2 = (x: string | string[] | null) => {
  if (x !== null) {
    if (typeof x === "object") {
      for (let str of x) {
        console.log(str);
      }
      return;
    }
    console.log(x);
    return;
  }
  console.log("");
};

// printAll2("anamul");

// "in" operator

type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }

  animal.swim();
};

// "instanceof" check

const date = new Date();
const err = new Error("Somthing went wrong");

// console.log(date instanceof Date);
// console.log(err instanceof Error);

const showDate = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toISOString());
    return;
  }
  const date = new Date(x);
  console.log(date.toISOString());
};

// showDate(new Date("12-16-1971"));
// showDate("12-16-1971");

// discriminated union

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

const circle: Circle = {
  kind: "circle",
  radius: 25,
};

const getArea = (shape: Circle | Square) => {
  if (shape.kind === "circle") {
    console.log(shape.radius);
  } else {
    console.log(shape.sideLength);
  }
};

// getArea(circle);



