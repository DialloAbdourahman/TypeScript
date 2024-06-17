let test = 'test'; // Here, TS is infering the data type implicitly.

let myName: string = 'Diallo'; // Here, we explicitly assigned a datatype.
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

meaningOfLife = 42;
isLoading = true;
album = 5;

const sum = (a: number, b: string) => {
  return a + b;
};
sum(5, '8');

let postID: string | number; // This is a union.
let isActive: boolean | 0 | 1;

let re: RegExp = /\w+/g;

/*

=> A strongly typed language demands us to specify the datatype e.g TS
=> A looseley or weakly typed language doesn't require us to specify the data type e.g JS

=> A language that is strongly typed can either be statically typed or dynamically typed.

=> A statically typed language means that types are checked at compile time e.g TS.
=> A dynamically typed language means that types are checked at runtime e.g JS.

=> Strongly typed languages enhance type safety further by ensuring that variables are used consistently with their defined types. So, a language could be: Strongly and statically typed, like Java or TypeScript. Strongly and dynamically typed, like Python or Ruby.

=> Some benefits of TS are: self-documentation, catching errors in dev, great for teams.
=> let name = 'test'; name = 45; -> this is valid in JS but not valid in TS

*/
