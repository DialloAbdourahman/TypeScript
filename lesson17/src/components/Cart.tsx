import { useState } from 'react';
import useCart from '../hooks/useCart';
import CartLineItem from './CartLineItem';

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, totalPrice, totatItems, cart, REDUCER_ACTIONS } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  const pageContent = confirm ? (
    <h2>Thank for your order.</h2>
  ) : (
    <>
      <h2 className='offscreen'>Cart</h2>
      <ul className='cart'>
        {cart.map((item) => {
          return (
            <CartLineItem
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          );
        })}
      </ul>
      <div className='cart__totals'>
        <p>Total Items: {totatItems} </p>
        <p>Total Price: {totalPrice} </p>
        <button
          className='cart__submit'
          disabled={!totatItems}
          onClick={onSubmitOrder}
        >
          Place Order
        </button>
      </div>
    </>
  );

  const content = <main className='main main--cart'>{pageContent}</main>;

  return content;
};

export default Cart;
