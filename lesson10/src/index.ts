// Utility types: Ts offers many utility types that are helpful for common types transformations.

// Partials: When we don't wanna require all the props of an interface or a type.

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}
const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};
const assign1: Assignment = {
  studentId: '1234',
  title: 'Final Project',
  grade: 0,
};
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);

// Required and Readonly: Make all the props of props of an interface to be required and readonly makes the object we instantiated from the interface readonly.

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // Send to db.
  return assign;
};
recordAssignment({ ...assignGraded, verified: true });
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};
// assignVerified.grade = 5;

// Record: Allows us to define the key and value types. We can also create string literal keys and values.

const hexColorMap: Record<string, string> = {
  red: 'red',
  green: 'green',
  blue: 'blue',
};
type Student = 'sarah' | 'kelly';
type LetterGrade = 'A' | 'B' | 'C' | 'D' | 'U';
const finalGrades: Record<Student, LetterGrade> = {
  sarah: 'A',
  kelly: 'U',
};
interface Grades {
  assign1: number;
  assign2: number;
}
const gradeData: Record<Student, Grades> = {
  sarah: { assign1: 25, assign2: 5 },
  kelly: { assign1: 72, assign2: 50 },
};

// Pick and Omit: Pick allows us to pick which key we should pick and omit does the reverse

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;
const score: AssignResult = { studentId: 'd123', grade: 85 };
type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;
const preview: AssignPreview = { studentId: '1234', title: 'final project' };

// Exclude, Extract and Nonnulable: doesn't work with interfaces, it will work with string literal union types

type adjustedGrades = Exclude<LetterGrade, 'U'>;
type highGrades = Extract<LetterGrade, 'A' | 'B'>;
type AllPossibleGrades = 'Dave' | 'John' | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType: Allows us to get the return type of a fucntion and store it in a type for example. This is very usefull if we are working with a fuction that we didn't create and we update that fuction and the return if different.

// type NewAssign = { title: string; points: number };
const createNewAssign = (title: string, points: number) => {
  return { title, points };
};
type NewAssign = ReturnType<typeof createNewAssign>;
const tsAssign: NewAssign = createNewAssign('Utility types', 100);
console.log(tsAssign);

// Parameters: Samething for ReturnType utility type but works with parameters instead.

type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ['Generics', 100];
const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited = helps us to get the return type of a promise.

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
fetchUsers().then((users) => console.log(users));
