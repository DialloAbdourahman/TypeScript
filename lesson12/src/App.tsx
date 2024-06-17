import { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Counter from './components/Counter';
import List from './components/List';
import TestGeneric from './components/TestGeneric';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Header title='Hello' />
      <Section>This is my section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={['Coffee', 'Tee', 'Code']}
        render={(item: string) => <span className='bold'>{item}</span>}
      />
      <TestGeneric items={['1', '2', '3', 4]} render={(item) => item} />
    </>
  );
}

export default App;
