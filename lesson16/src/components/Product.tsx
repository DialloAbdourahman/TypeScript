import React, { ReactElement } from 'react';
import { REDUCER_ACTION_TYPE } from '../reducer/CartReducer';
import { ProductType } from '../context/ProductsContext';
import { ReducerAction } from '../reducer/CartReducer';

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  inCart: boolean;
};

const Product = ({ product, dispatch, inCart }: PropsType): ReactElement => {
  let img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;

  const onAddToCart = () =>
    dispatch({
      type: REDUCER_ACTION_TYPE.ADD,
      payload: { ...product, qty: 1 },
    });

  const itemInCart = inCart ? ' -> Item in Cart: Yes' : null;

  const content = (
    <article className='product'>
      <h3>{product.name}</h3>
      <img className='product__img' src={img} alt={product.name} />
      <p>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(product.price)}{' '}
        {itemInCart}
      </p>

      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );

  return content;
};

export default Product;
