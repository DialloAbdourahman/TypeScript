import React, { ReactElement } from 'react';
import { useCartContext } from '../context/CartContext';
import { useProductContext } from '../context/ProductsContext';
import Product from './Product';

const ProductList = () => {
  const {
    state: { cart },
    dispatch,
  } = useCartContext();
  const { products } = useProductContext();

  let pageContent: ReactElement | ReactElement[] = <p>Loading</p>;

  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          inCart={inCart}
        />
      );
    });
  }

  const content = <main className='main main--products'>{pageContent}</main>;

  return content;
};

export default ProductList;
