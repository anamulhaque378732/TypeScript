// don't recommamded type assertion

// "as" use type  assertion

type Status = "pending" | "approved" | "rejected";

const someStatus: string = "pending";

const showStatus = (status: Status) => {
  console.log("you current application status is", status);
};

// showStatus(someStatus as Status);

// Argument of type '(status: Status) => void' is not assignable to parameter of type 'Status'

// showStatus(someStatus);

//  non-null assertion

interface Config {
  port?: number;
}
const config: Config = {
  port: 5000,
};

const currentPort: number = config.port!;
const currentPort2: number = config.port as number;

// Type 'number | undefined' is not assignable to type 'number'.

// const currentPort: number = config.port;

// constand assertion

const configuration = {
  port: 8800,
  prefix: "/api/v1",
} as const;

// Cannot assign to port because it is a read-only property.

// configuration.port = 1254;
