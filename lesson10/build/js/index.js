"use strict";
// Utility types: Ts offers many utility types that are helpful for common types transformations.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: '1234',
    title: 'Final Project',
    grade: 0,
};
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
// Required and Readonly: Make all the props of props of an interface to be required and readonly makes the object we instantiated from the interface readonly.
const recordAssignment = (assign) => {
    // Send to db.
    return assign;
};
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 5;
// Record: Allows us to define the key and value types. We can also create string literal keys and values.
const hexColorMap = {
    red: 'red',
    green: 'green',
    blue: 'blue',
};
const finalGrades = {
    sarah: 'A',
    kelly: 'U',
};
const gradeData = {
    sarah: { assign1: 25, assign2: 5 },
    kelly: { assign1: 72, assign2: 50 },
};
const score = { studentId: 'd123', grade: 85 };
const preview = { studentId: '1234', title: 'final project' };
// ReturnType: Allows us to get the return type of a fucntion and store it in a type for example. This is very usefull if we are working with a fuction that we didn't create and we update that fuction and the return if different.
// type NewAssign = { title: string; points: number };
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign('Utility types', 100);
console.log(tsAssign);
const assignArgs = ['Generics', 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
