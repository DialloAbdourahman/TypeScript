let stringArray = ['one', 'hey', 'Diallo'];
let guitars = ['Strat', 'les paul', 5150];
let mixData = ['EVH', 11984, true];

stringArray[0] = 'Diallo';
stringArray.push('Test');
// stringArray.push(5)

guitars[0] = 1984;
guitars.unshift('JIM');

guitars = stringArray;
mixData = guitars;

let test = [];
test.push('d');
test.push(1);

let bands: string[] = [];
bands.push('Van halen');

let tuple: [string, number, boolean] = ['test', 4, true]; // This is a tuple and it is very strict.

// Objects

let myObj: object;
myObj = ['a'];

const exampleObj = {
  prop1: 'diallo',
  prop2: true,
};

exampleObj.prop2 = false;

type Guitarist = {
  name?: string;
  active?: boolean;
  albums: (string | number)[];
};

// interface Guitarist {
//   name?: string;
//   active?: boolean;
//   albums: (string | number)[];
// }

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 'OU812'],
};

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['one', 'two', 'four'],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    // This here is called narrowing.
    return 'Hello ' + guitarist.name.toLocaleLowerCase();
  }
  return 'Hello!';
};
console.log(greetGuitarist(jp));

// ENUMS

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
console.log(Grade.A);

// => "start": "tsc -w && node/dist/index.js" -> this might be an example on how to compile and run a nodejs application.
// => In nodejs, we can use a package called ts-node which will help us run directly TS without having to compile it. The start script might look like this : "start": "ts-node server/index.js"

enum STATUSES {
  SUCCESS = 200,
  ERROR = 400,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

console.log(STATUSES);
console.log(STATUSES.NOT_FOUND);
