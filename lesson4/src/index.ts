// TYPE ALIAS

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// interface PostId = stringOrNumber; // This is impossible

// LITERAL TYPES

let myName: 'Dave';

let userName: 'Dave' | 'John' | 'Diallo';
userName = 'Diallo';

type user = 'Diallo' | 'Abdourahman' | 'Souleyman';
let diallo: user = 'Abdourahman';

// FUNCTIONS

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg(5);
logMsg(add(2, 3));
logMsg('25');

let substract = function (c: number, d: number): number {
  return c - d;
};

logMsg(substract(2, 8));

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//   (a: number, b: number): number;
// }

const multiply: mathFunction = (a, b) => {
  return a * b;
};

logMsg(multiply(2, 2));

// OPTIONAL PARAMETERS: they need to come last

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c === 'undefined') {
    // Narrowing or type guard.
    return a + b;
  }
  return a + b + c;
};

logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));

// DEFAULT PARAMETER: they don't work with a type aliases like mathFunction that we created

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(sumAll(2, 2, 5));
logMsg(sumAll(2, 2));
logMsg(sumAll(undefined, 3));

// REST PARAMETER: the rest of the parameters. it also comes last

const total = (a: number, ...nums: number[]) => {
  console.log(a, nums);
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));

// NEVER TYPE: for functions that explicitly returns an error or a function with an endless loop. So whenever TS tells you that you have a never type, go and verify your code maybe you have an error inside like an endless loop for example.

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};
createError('This is an error.');

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;

    // if(i > 100) break
  }
};

// CUSTOM TYPE GUARD

const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false;
};

// USE OF THE NEVER TYPE

const numberOrString = (value: number | string): string => {
  if (typeof value == 'string') return 'string';
  if (isNumber(value)) return 'number';

  // Here, we are returning a never type because we need to tell it to typescript that this should never happen
  return createError('This should never happen');
};

//////////////////// Test rest

const testRest = (a: number, b: number, ...rest: string[]) => {
  return rest;
};
console.log(testRest(1, 2, 'e', 'z'));

const [one, two, ...rest]: string[] = [
  'test',
  'again',
  'another',
  'and another one again',
];
console.log(one, two);
console.log(rest);

/////////////////////////// Interfaces and type inheritance.

interface Person {
  id: string;
  name: string;
  email: string;
}

interface Child extends Person {
  school: string;
}

interface Adult extends Person {
  hasAJob: boolean;
}

// type Person = {
//   id:string,
//   name:string,
//   email:string
// }

// type Child = Person & {
//   school: string;
// };

// type Adult = Person & {
//   hasAJob:boolean
// };

const soul: Child = {
  id: '1',
  name: 'Diallo Souleyman',
  email: 'diallisouleyman78@gmail.com',
  school: 'IBAY',
};

const abdou: Adult = {
  id: '2',
  name: 'Diallo Abdourahman',
  email: 'dialliabdourahman78@gmail.com',
  hasAJob: true,
};
