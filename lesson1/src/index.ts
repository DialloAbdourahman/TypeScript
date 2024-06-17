let myName: string = 'Diallo';
let meaningOfLife: number;
let isLoading: boolean;

isLoading = true;

/*

=> Any valid js is valid in typescript but if there are some errors, the typescript compiler will let us know before it is being compiled to js. From here, we can fix the errors before we compile or compile while ignoring the errors since any valid js is valid TypeScript. We can also configure the compiler to make sure that it doesn't compile if there is an error.

=> tsc main.ts -> will compile the to main.js. 

=> tsc --init -> this will initialize a TypeScript project. It will go ahead and create a tsconfig.json file where we can further configure the TypeScript compiler. Here are some configs:
      * "target":"es2016" -> this will let the typescript compiler know which version of javascript we want it to compile to.
      * "rootDir":"./src" -> this tell the ts compiler to compile all the files found in the src directory.
      * "outDir":"/build/js" -> this will make sure that typescript should save all the compiled js in the build/js directory
      * "noEmitOnError":true -> this will tell the ts compiler not to compile if there is an error.
      * "include":["src"] -> this will tell the ts compiler to compile only the files found in the src directory.

=> tsc -w -> will start the TS compiler and watch for anychange.

*/
