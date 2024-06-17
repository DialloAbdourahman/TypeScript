/****************************************************************************/
// Index signatures are usefull when we are creating an object but we don't know the exact name of the keys but we know the shape of the object and you can declare the types of the keys and the types of the values. Another reason is that TS requires an object signature if you atempt to access an object property dynamically.

// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

// interface TransactionObj {
//   readonly [key: string]: number; // All of the key are going to be strings and the values are going to be numbers. the readonly means we can't assign a value to this object after it has been created.
// }

// interface TransactionObj {
//   readonly [key: string]: number; // We want at least the object to contain pizza, books and job.
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

type TransactionObj = {
  readonly [key: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
};

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

// Even though this makes sence, without an index signature it wont work.
let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj) => {
  let total = 0;
  for (const key in transactions) {
    total += transactions[key];
  }
  return total;
};
console.log(todaysNet(todaysTransactions));

// A drawback using index sigatures is that TS doesn't see in the future and certain small issues can arrise. TS has no way to know the names we are going to give to our keys. For example:
console.log(todaysTransactions.test);
console.log(todaysTransactions['test']);

/////////////////////////////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined; // Undefined here because classes is optional.
  name: string;
  GPA: number;
  classes?: number[];
}
const student: Student = {
  name: 'Doug',
  GPA: 3.5,
  classes: [100, 200],
};
// console.log(student.test);
console.log(student.name);
for (const key in student) {
  // We can also iterate through an object created that doesn't have an index signature. The keyof creates a union type of the specific string literal keys aka name, GPA and classes
  console.log(`${key}: ${student[key as keyof Student]}`);
  // This is what the keyof is doing behind the scenes.
  console.log(`${key}: ${student[key as 'name' | 'GPA' | 'classes']}`);
}
Object.keys(student).forEach((key) => {
  // This is if we don't have access to the Student type. we can simply use an object it has been created from
  console.log(student[key as keyof typeof student]);
  // This is what is happening under the hood
  console.log(student[key as keyof {}]);
});
console.log(typeof student);

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
logStudentKey(student, 'GPA');

/////////////////////////////////////////////////

// The small pb with this implementation is that it will allow us to access properties that doesn't exist in the object.
// interface Incomes {
//   [key: string]: number;
// }

type Streams = 'salary' | 'bonus' | 'sideHusle';

// Here, we are using the utility type Record. It means that we are creating an object with keys salary, bonus and sideHusly and each of them might be either a string or a number. Here, we can use a string literal for the key where as in an interface we can't. An issues here is that we can't state the data type of a specific key value, in our case all values can either be a number or a string. Basically we can't say salary is always a string for example
type Incomes = Record<Streams, number | string>;
// type Incomes = Record<'salary' | 'bonus' | 'sideHusle', number | string>;

const monthlyIncomes: Incomes = {
  bonus: 100,
  salary: 500,
  sideHusle: 4,
};
for (const key in monthlyIncomes) {
  // Another drawback is that we still have to come and use an assertion even though we have a record utility type
  console.log(monthlyIncomes[key as keyof Incomes]);
}

////////////////////////////////////////////////////////////////////////

interface Person {
  name: string;
  email: string;
}

const abdou: Person = {
  name: 'Diallo Abdourahman',
  email: 'dialliabdourahman78@gmail.com',
};

console.log(abdou.email);
const nameProperty: string = 'name';
console.log(abdou[nameProperty as keyof Person]);
