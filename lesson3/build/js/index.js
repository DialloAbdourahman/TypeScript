"use strict";
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
let bands = [];
bands.push('Van halen');
let tuple = ['test', 4, true]; // This is a tuple and it is very strict.
// Objects
let myObj;
myObj = ['a'];
const exampleObj = {
    prop1: 'diallo',
    prop2: true,
};
exampleObj.prop2 = false;
// interface Guitarist {
//   name?: string;
//   active?: boolean;
//   albums: (string | number)[];
// }
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 'OU812'],
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['one', 'two', 'four'],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        // This here is called narrowing.
        return 'Hello ' + guitarist.name.toLocaleLowerCase();
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
// ENUMS
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
// => "start": "tsc -w && node/dist/index.js" -> this might be an example on how to compile and run a nodejs application.
// => In nodejs, we can use a package called ts-node which will help us run directly TS without having to compile it. The start script might look like this : "start": "ts-node server/index.js"
var STATUSES;
(function (STATUSES) {
    STATUSES[STATUSES["SUCCESS"] = 200] = "SUCCESS";
    STATUSES[STATUSES["ERROR"] = 400] = "ERROR";
    STATUSES[STATUSES["NOT_FOUND"] = 404] = "NOT_FOUND";
    STATUSES[STATUSES["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(STATUSES || (STATUSES = {}));
console.log(STATUSES);
console.log(STATUSES.NOT_FOUND);
