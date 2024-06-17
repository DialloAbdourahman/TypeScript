// TYPE CASTING OR TYPE ASSERTION IS THE PROCESS OF OVERRRIDING A TYPE. SOMETIMES YOU WILL HAVE INFORMATION ABOUT THE TYPE OF A VARIABLE THAT TYPESCRIPT CAN'T KNOW ABOUT.

// Type assertion is also like telling TS that we know what we are doing more that it.

// Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own. Such a situation can occur when you might be porting over code from JavaScript and you may know a more accurate type of the variable than what is currently assigned. It is similar to type casting in other languages like C# and Java. However, unlike C# and Java, there is no runtime effect of type assertion in TypeScript. It is merely a way to let the TypeScript compiler know the type of a variable.

type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific

let a: One = 'hello';

let b = a as Two; // Less specific

let c = a as Three; // More specific.

// This is also possible but we don't use it that often because it doesn't work in react.
let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};

let myVal: string = addOrConcat(2, 2, 'concat') as string; // more specific

// Be careful because TS doesn't see any pb here but a string is returned. So mistakes can be made with assertion because TS now trusts us.
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

// TS will still check assertions when it can
// 10 as string // will cause an error
10 as unknown as string; // this is forced or double casting. It overides typescript like the any type.

// THE DOM: TS doesn't know what document we are linking our javascript to.

const img = document.querySelector('img') as HTMLImageElement;
let nonNullImage = document.querySelector('img')!; // This is the non null assertion.

// ! is a non null assertion aka telling to TS that we know this element is not null.

const myImage = document.getElementById('#img') as HTMLImageElement;

const nextImage = <HTMLImageElement>document.getElementById('#img');

img.src;
myImage.src;

// It can be used with objects too.

interface Student {
  name: string;
  code: number;
}
let student = {} as Student; // to a more specific
student.name = 'Rohit'; // Correct
student.code = 123; // Correct
