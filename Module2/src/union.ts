// when two file export same name function . use use module : export {} or use "moduleDetection: force" in tsconfig.json file

export {};

const greetings = () => {
  console.log("Hello Hello  world");
};

// greetings();

// Literal Type

type Status = "pending";
// when use a specific type
const status: Status = "pending";

// union | --> union symble, & --or symble

//Basic Union (mixed two type )

type Identity = string | number; // "|" = union

const id: Identity = 25;
const ide: Identity = "Name";

// Literal Union

type Role = "user" | "admin" | "manager";

const userRole: Role = "admin";

// Object Union

type Admin = { id: number; role: "admin"; privilege: string[] };

type Member = { id: number; role: "member"; plans: string[] };

type User = Admin | Member;

const user: User = {
  id: 123,
  role: "admin",
  privilege: ["4", "12"],
};

const user2: User = {
  id: 123,
  role: "member",
  plans: ["12", "14"],
};
