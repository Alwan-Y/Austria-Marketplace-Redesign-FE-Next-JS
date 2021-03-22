import type from '../../type';

const initialState = {
  items: [],
};

const addToCart = (state = initialState.items, { payload }) => {
  console.log(state)

  const item = state.find((item) => item.id === payload.id);

  if (item) {
    const items = state.filter(item => item.id !== payload.id)

    const newItem = {
      ...item,
      quantity: item.quantity + 1
    }

    return [...items, newItem]
  } 

  const newPayload = {
    ...payload,
    quantity: 1
  }

  console.log([...state, newPayload])

  return [...state, newPayload]
};

const removeFromCart = (state, payload) => {
  console.log('Belum dibuat');
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TO_CART:
      return {
        ...state,
        items: addToCart(state.items, action),
      };
    case type.REMOVE_FROM_CART:
      return removeFromCart(state, action);
    default:
      return state;
  }
};

export default cart;
