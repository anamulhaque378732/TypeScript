// utility types

// partial

interface User {
  id: string;
  name: string;
  email: string;
}

// interface OptionalUser {
//   id?: string;
//   name?: string;
//   email?: string;
// }

const updateProfile = (id: string, date: Partial<User>) => {};

updateProfile("absds", { name: "Anamul" });

// Required

interface Config {
  apiKey?: string;
  timeout?: number;
}

const initialize = (config: Required<Config>) => {};

initialize({ apiKey: "adauh", timeout: 3000 });

// pick

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;

const preview: ProductPreview = {
  name: "ABC",
  description: "SHSH",
};

// omit

interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: string;
}
type PublicEmployee = Omit<Employee, "salary" | "nid">;

const directoryEntry: PublicEmployee = {
  id: 42,
  name: "anamul",
};

// record
type Environment = "development" | "staging" | "production";

const apiUrls: Record<Environment, string> = {
  development: "http://localhost:300",
  staging: "http://localhost:300",
  production: "http://localhost:300",
};
