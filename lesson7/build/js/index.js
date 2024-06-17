"use strict";
class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return 'Hello, I am ' + this.age;
    }
}
const dave = new Coder('dave', 'rock', 42);
// console.log(dave.getAge());
// console.log(dave.age);
// console.log(dave.lang);
class WebDev extends Coder {
    constructor(name, music, age, computer) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return 'I write ' + this.lang;
    }
}
const sara = new WebDev('sara', 'lofi', 25, 'Mac');
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new Guitarist('Jimmy', 'guitar');
// console.log(page.play('strums'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
// the static keyword means that count doesn't apply to any instance of this class, it applies to the class itself.
Peeps.count = 0;
const john = new Peeps('john');
const steve = new Peeps('steve');
const amy = new Peeps('amy');
// console.log(Peeps.count);
// console.log(Peeps.getCount());
// console.log(steve.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) &&
            value.every((element) => typeof element === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const myBands = new Bands();
class CoderService {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.music = music;
        this.music = music;
    }
    getName() {
        return this.name;
    }
    static coderSayHello() {
        return 'Coder says hello';
    }
}
class UseCoderService {
    constructor(coderService) {
        this.coderService = coderService;
    }
    static hey() {
        return CoderService.coderSayHello();
    }
}
const coder = new Coder('Diallo Abdourahman', 'Michael Jackson', 23);
const coderSaysHello = UseCoderService.hey();
console.log(coderSaysHello);
