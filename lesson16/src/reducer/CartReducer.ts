import { CartStateType, CartItemType } from '../context/CartContext';

export const REDUCER_ACTION_TYPE = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  QUANTITY: 'QUANTITY',
  SUBMIT: 'SUBMIT',
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

export const cartReducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error('action.payload missing ADD action');
      }

      const { sku, name, price } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter((item) => {
        return item.sku !== sku;
      });

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      const qty: number = itemExists ? itemExists.qty + 1 : 1;

      const newCart = [...filteredCart, { sku, name, price, qty }].sort(
        (a, b) => {
          const itemA = Number(a.sku.slice(-4));
          const itemB = Number(b.sku.slice(-4));

          return itemA - itemB;
        }
      );

      const totalItems: number = newCart.reduce((prev, item) => {
        return prev + item.qty;
      }, 0);

      const totalPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(
        newCart.reduce((prev, item) => {
          return prev + item.qty * item.price;
        }, 0)
      );

      return { ...state, cart: newCart, totalItems, totalPrice };
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error('action.payload missing REMOVE action');
      }

      const { sku } = action.payload;

      const filteredCart: CartItemType[] = state.cart
        .filter((item) => {
          return item.sku !== sku;
        })
        .sort((a, b) => {
          const itemA = Number(a.sku.slice(-4));
          const itemB = Number(b.sku.slice(-4));

          return itemA - itemB;
        });

      const totalItems: number = filteredCart.reduce((prev, item) => {
        return prev + item.qty;
      }, 0);

      const totalPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(
        filteredCart.reduce((prev, item) => {
          return prev + item.qty * item.price;
        }, 0)
      );

      return { ...state, cart: filteredCart, totalItems, totalPrice };
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error('action.payload missing QUANTITY action');
      }

      const { sku, qty } = action.payload;

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      if (!itemExists) {
        throw new Error('Item must exist in order to update quantity');
      }

      const updatedItem: CartItemType = { ...itemExists, qty };

      const filteredCart: CartItemType[] = state.cart.filter((item) => {
        return item.sku !== sku;
      });

      const newCart = [...filteredCart, updatedItem].sort((a, b) => {
        const itemA = Number(a.sku.slice(-4));
        const itemB = Number(b.sku.slice(-4));

        return itemA - itemB;
      });

      const totalItems: number = newCart.reduce((prev, item) => {
        return prev + item.qty;
      }, 0);

      const totalPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(
        newCart.reduce((prev, item) => {
          return prev + item.qty * item.price;
        }, 0)
      );

      return { ...state, cart: newCart, totalItems, totalPrice };
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }
    default:
      throw new Error('Unidentified reducer action type');
  }
};
