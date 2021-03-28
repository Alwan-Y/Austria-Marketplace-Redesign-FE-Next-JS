import type from '../../type';

const initialState = {
  items: [],
};

const addToCart = (state = initialState.items, { payload }) => {
  const item = state.find((item) => item.id === payload.id);

  if (item) {
    const items = state.filter((item) => item.id !== payload.id);

    const prevQuantity = item.quantity + 1;

    const newItem = {
      ...item,
      quantity: prevQuantity,
      accumAmount: item.price * prevQuantity,
    };

    return [...items, newItem];
  }

  const newPayload = {
    ...payload,
    quantity: 1,
    accumAmount: payload.price,
  };

  return [...state, newPayload];
};

const removeFromIncrement = (state = initialState.items, { payload }) => {
  const item = state.find((item) => item.id === payload.id);

  if (item && item.quantity > 1) {
    const items = state.filter((item) => item.id !== payload.id);

    const prevQuantity = item.quantity - 1;

    const newItem = {
      ...item,
      quantity: prevQuantity,
      accumAmount: item.price * prevQuantity,
    };

    return [...items, newItem];
  }

  return state;
};

const removeFromCart = (state = initialState.items, { payload }) => {
  const items = state.filter((item) => item.id !== payload.id);

  return items;
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TO_CART:
      return {
        ...state,
        items: addToCart(state.items, action),
      };
    case type.REMOVE_INCREMENT:
      return {
        ...state,
        items: removeFromIncrement(state.items, action),
      };
    case type.REMOVE_FROM_CART:
      return {
        ...state,
        items: removeFromCart(state.items, action),
      };
    default:
      return state;
  }
};

export default cart;
