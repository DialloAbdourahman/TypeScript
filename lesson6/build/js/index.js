"use strict";
// TYPE CASTING OR TYPE ASSERTION IS THE PROCESS OF OVERRRIDING A TYPE. SOMETIMES YOU WILL HAVE INFORMATION ABOUT THE TYPE OF A VARIABLE THAT TYPESCRIPT CAN'T KNOW ABOUT.
// convert to more or less specific
let a = 'hello';
let b = a; // Less specific
let c = a; // More specific.
// This is also possible but we don't use it that often because it doesn't work in react.
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat'); // more specific
// Be careful because TS doesn't see any pb here but a string is returned. So mistakes can be made with assertion because TS now trusts us.
let nextVal = addOrConcat(2, 2, 'concat');
// TS will still check assertions when it can
// 10 as string // will cause an error
10; // this is forced or double casting. It overides typescript like the any type.
// THE DOM: TS doesn't know what document we are linking our javascript to.
const img = document.querySelector('img');
let nonNullImage = document.querySelector('img'); // This is the non null assertion.
// ! is a non null assertion aka telling to TS that we know this element is not null.
const myImage = document.getElementById('#img');
const nextImage = document.getElementById('#img');
img.src;
myImage.src;
let student = {}; // to a more specific
student.name = 'Rohit'; // Correct
student.code = 123; // Correct
