import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

interface User {
  id: number;
  username: string;
}

type FibFunc = (n: number) => number;

const fib: FibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum = 5;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  // const [users, setUsers] = useState<User[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log('mounting');
    console.log('Users: ', users);

    return () => {
      console.log('unmounting');
    };
  }, [users]);

  const addTwo = useCallback((): void => {
    setCount((prev) => prev + 2);
  }, [count]);

  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <div className='app'>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>Result: {result}</h2>
      <input type='text' name='' id='' ref={inputRef} />
    </div>
  );
}

export default App;
