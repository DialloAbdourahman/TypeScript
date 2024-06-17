import React, { ReactNode } from 'react';

type TestGenericProps<T> = {
  items: T[];
  render: (item: T) => ReactNode;
};

const TestGeneric = <T,>({ items, render }: TestGenericProps<T>) => {
  return (
    <div>
      {items.map((item, i) => {
        return <li key={i}>{render(item)}</li>;
      })}
    </div>
  );
};

export default TestGeneric;
