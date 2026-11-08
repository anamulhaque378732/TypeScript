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

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
  message: string;
}

type UserResponse = ApiResponse<User>;
type blogResponse = ApiResponse<Blog>;

const userRes: ApiResponse<User> = {
  statusCode: 200,
  success: true,
  data: {
    name: "Anamul",
    role: "Admin",
  },
  message: "Something Wrong",
};

const fetchUser = async (): Promise<User | undefined> => {
  try {
    const res = await fetch("/api/v1/some-endpoint");
    const data = (await res.json()) as ApiResponse<User>;
    if (!res.ok || !data.success) {
      throw new Error(`Failed fetch user data : ${data.message}`);
    }
    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.log("Something went wrong");
    }
  }
};

const userData = await fetchUser();
if (userData) {
  console.log(userData.name);
}
