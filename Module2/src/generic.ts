// Generic

// const wrapInArray2 = <something>(value: something) => {
//   return [value];
// };

const wrapInArray = <T>(value: T) => {
  return [value];
};

const stringArray = wrapInArray<string>("abc");

const numberArr = wrapInArray(123);

// console.log(stringArray, numberArr);

stringArray.map((item) => item.toUpperCase());

numberArr.map((item) => console.log(item));

interface User {
  name: string;
  role: string;
}

interface Blog {
  title: string;
  description: string;
  date: string;
}

interface apiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

type UserResponse = apiResponse<User>;
type blogResponse = apiResponse<Blog>;

const userRes: apiResponse<User> = {
  statusCode: 200,
  success: true,
  data: {
    name: "Anamul",
    role: "Admin",
  },
};
