import { ReactElement, createContext, useContext, useReducer } from 'react';
import { ReducerAction, cartReducer } from '../reducer/CartReducer';

export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  qty: number;
};

export type CartStateType = {
  cart: CartItemType[];
  totalItems: number;
  totalPrice: string;
};

const initialState: CartStateType = {
  cart: [],
  totalItems: 0,
  totalPrice: '',
};

const CartContext = createContext<{
  state: CartStateType;
  dispatch: React.Dispatch<ReducerAction>;
}>({ state: initialState, dispatch: () => null });

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = (): {
  state: CartStateType;
  dispatch: React.Dispatch<ReducerAction>;
} => {
  return useContext(CartContext);
};
