// Sometimes we don't know what types would be passed to a function, class, interface or type aliases. Generics allows us to provide a type of place holder aka a type of variable.

// This here is limited to only strings, let's say we wanna write a more generic function that can take numbers too, we are going to abstract the type out
const stringEcho = (arg: string): string => {
  return arg;
};

const echo = <T>(arg: T): T => {
  return arg;
};
console.log(echo(5));
console.log(echo<string>('five'));

const isObj = <T>(arg: T): boolean => {
  return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObj<null>(null));
console.log(isObj<object>({}));
console.log(isObj(5));
console.log(isObj('null'));

// One good place to use generics is when your function has to do some logic about what it is going to return.
// console.log('bang', !!5);
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }

  return { arg, is: !!arg };
};
console.log(isTrue(''));
console.log(isTrue('5'));
console.log(isTrue(0));
console.log(isTrue({}));
console.log(isTrue({ yo: 'd' }));
console.log(isTrue([]));
console.log(isTrue([5, 6]));
console.log(isTrue(undefined));
console.log(isTrue(null));
console.log(isTrue(NaN));
console.log(isTrue(-0));

////////////////

interface BoolCheck<T> {
  value: T;
  is: Boolean;
}
const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  // Since arrays are always true, we need to test this case.
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }

  // Since objects are always true, we need to test this case.
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }

  return { value: arg, is: !!arg };
};

/////////////////////

interface HasId {
  id: number;
}

// we can narrow the type here and say that the user has to have an id property
const processUser = <T extends HasId>(user: T) => {
  // Process the user with logic here.
  return user;
};
console.log(processUser({ id: 1, name: 'dave' }));
// console.log(processUser({ name: 'dave' }));

//////////////////////////////

// we are building K as a key of the first type that we passed in
const getUsersProperty = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};
const userArray = [
  {
    id: 1,
    name: 'Diallo Abdourahman',
    username: 'dialloabdourahman',
    email: 'dialliabdourahman78@gmail.com',
    address: {
      street: 'Nouvelle route Nkolbisson',
      city: 'Yaounde',
      zip: '1234',
      geo: { lat: '-51.789654', long: '11.874521' },
    },
    phone: '620487789',
    website: 'www.diallo.com',
    company: { name: 'diallocompany', 'client-server': 'Multi-layered.' },
  },
  {
    id: 2,
    name: 'Diallo Souleyman',
    username: 'diallosouleyman',
    email: 'diallisouleyman78@gmail.com',
    address: {
      street: 'Nouvelle route Nkolbisson',
      city: 'Yaounde',
      zip: '1234',
      geo: { lat: '-51.789654', long: '11.874521' },
    },
    phone: '620487789',
    website: 'www.diallo.com',
    company: { name: 'diallocompany', 'client-server': 'Multi-layered.' },
  },
  {
    id: 3,
    name: 'Diallo Fatoumata',
    username: 'diallofatoumata',
    email: 'diallifatoumata78@gmail.com',
    address: {
      street: 'Nouvelle route Nkolbisson',
      city: 'Yaounde',
      zip: '1234',
      geo: { lat: '-51.789654', long: '11.874521' },
    },
    phone: '620487789',
    website: 'www.diallo.com',
    company: { name: 'diallocompany', 'client-server': 'Multi-layered.' },
  },
];
console.log(getUsersProperty(userArray, 'address'));
console.log(getUsersProperty(userArray, 'company'));

///////////////////////////////

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject<string>('john');
console.log(store.state);
store.state = 'Dave';

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ['dave', 42, true];
console.log(myState.state);

///////////////////////////////////////////

interface User {
  id: string;
  name: string;
  email: string;
}

interface MyResponseType<T> {
  data: T[];
  status: number;
  message: string;
}

const getUsers: MyResponseType<User> = {
  data: [
    {
      id: '1',
      name: 'Diallo Abdourahman',
      email: 'dialliabdourahman78@gmail.com',
    },
  ],
  status: 200,
  message: 'Liste of users',
};
