class Coder {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'TypeScript'
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return 'Hello, I am ' + this.age;
  }
}

const dave = new Coder('dave', 'rock', 42);
// console.log(dave.getAge());
// console.log(dave.age);
// console.log(dave.lang);

class WebDev extends Coder {
  constructor(
    name: string,
    music: string,
    age: number,
    public computer: string
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return 'I write ' + this.lang;
  }
}

const sara = new WebDev('sara', 'lofi', 25, 'Mac');
// console.log(sara.getLang());
// console.log(sara);

// Everything in an interface whether it being a property or a method is public abstract.
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  constructor(public name: string, public instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  public play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const page = new Guitarist('Jimmy', 'guitar');
// console.log(page.play('strums'));

class Peeps {
  // the static keyword means that count doesn't apply to any instance of this class, it applies to the class itself.
  static count: number = 0;
  public id: number;

  static getCount(): number {
    return Peeps.count;
  }

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const john = new Peeps('john');
const steve = new Peeps('steve');
const amy = new Peeps('amy');
// console.log(Peeps.count);
// console.log(Peeps.getCount());
// console.log(steve.id);

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((element) => typeof element === 'string')
    ) {
      this.dataState = value;
      return;
    } else throw new Error('Param is not an array of strings');
  }
}

const myBands = new Bands();
// myBands.data = ['Neil young', 'Led Zep'];
// console.log(myBands.data);
// myBands.data = [...myBands.data, 'ZZ top'];
// console.log(myBands.data);
// myBands.data = 'van haland';

///////////////////////////////////////

interface CoderServiceType {
  name: string;
  music: string;
  age: number;
  lang: string;
  getName: () => string;
  // coderSayHello: () => string;
}

class CoderService implements CoderServiceType {
  constructor(
    public name: string,
    public music: string,
    public age: number,
    public lang: string = 'TypeScript'
  ) {
    this.name = name;
    this.age = age;
    this.music = music;
    this.music = music;
  }

  public getName(): string {
    return this.name;
  }

  public static coderSayHello(): string {
    return 'Coder says hello';
  }
}

class UseCoderService {
  constructor(private coderService: CoderService) {}

  public static hey(): string {
    return CoderService.coderSayHello();
  }
}

const coder = new Coder('Diallo Abdourahman', 'Michael Jackson', 23);
const coderSaysHello = UseCoderService.hey();
console.log(coderSaysHello);
