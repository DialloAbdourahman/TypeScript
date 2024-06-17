"use strict";
let test = 'test'; // Here, TS is infering the data type implicitly.
let myName = 'Diallo'; // Here, we explicitly assigned a datatype.
let meaningOfLife;
let isLoading;
let album;
meaningOfLife = 42;
isLoading = true;
album = 5;
const sum = (a, b) => {
    return a + b;
};
sum(5, '8');
let postID; // This is a union.
let isActive;
let re = /\w+/g;
/*

=> A strongly typed language demands us to specify the datatype e.g TS
=> A looseley or weakly typed language doesn't require us to specify the data type e.g JS
=> A language that is strongly typed can either be statically typed or dynamically typed.
=> A statically typed language means that types are checked at compile time e.g TS.
=> A dynamically typed language means that types are checked at runtime e.g JS.
=> Some benefits of TS are: self-documentation, catching errors in dev, great for teams.
=> let name = 'test'; name = 45; -> this is valid in JS but not valid in TS

*/
