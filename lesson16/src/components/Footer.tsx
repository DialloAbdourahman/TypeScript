import React from 'react';
import { useCartContext } from '../context/CartContext';

type PropsType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType) => {
  const {
    state: { totalItems, totalPrice },
  } = useCartContext();

  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shopping Cart @copy: {year}</p>
  ) : (
    <>
      <p>Total items: {totalItems}</p>
      <p>Total price: {totalPrice}</p>
      <p>Shopping Cart @copy: {year}</p>
    </>
  );

  const content = <footer className='footer'>{pageContent}</footer>;

  return content;
};

export default Footer;
