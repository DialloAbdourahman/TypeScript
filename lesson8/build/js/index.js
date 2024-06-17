"use strict";
/****************************************************************************/
// Index signatures are usefull when we are creating an object but we don't know the exact name of the keys but we know the shape of the object and you can declare the types of the keys and the types of the values. Another reason is that TS requires an object signature if you atempt to access an object property dynamically.
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
// Even though this makes sence, without an index signature it wont work.
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
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
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
console.log(student.name);
for (const key in student) {
    // We can also iterate through an object created that doesn't have an index signature. The keyof creates a union type of the specific string literal keys aka name, GPA and classes
    console.log(`${key}: ${student[key]}`);
    // This is what the keyof is doing behind the scenes.
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).forEach((key) => {
    // This is if we don't have access to the Student type. we can simply use an object it has been created from
    console.log(student[key]);
    // This is what is happening under the hood
    console.log(student[key]);
});
console.log(typeof student);
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
logStudentKey(student, 'GPA');
// type Incomes = Record<'salary' | 'bonus' | 'sideHusle', number | string>;
const monthlyIncomes = {
    bonus: 100,
    salary: 500,
    sideHusle: 4,
};
for (const key in monthlyIncomes) {
    // Another drawback is that we still have to come and use an assertion even though we have a record utility type
    console.log(monthlyIncomes[key]);
}
const abdou = {
    name: 'Diallo Abdourahman',
    email: 'dialliabdourahman78@gmail.com',
};
console.log(abdou.email);
const nameProperty = 'name';
console.log(abdou[nameProperty]);
