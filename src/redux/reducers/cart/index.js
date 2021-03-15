import type from '../../type';

const initialState = {
  items: [
    {
      name: 'baju',
      amount: 100000,
    },
  ],
  amount: 0,
};

const addToCart = (state, payload) => {
  const item = state.items.find((item) => item.name === payload.name);

  if (item) {
    return Object.assign({}, state, {
      items: state.itmes,
      amount: state.amount + payload.amount,
    });
  }

  return Object.assign({}, state, {
    items: state.itmes.push(payload.name),
    amount: state.amount + payload.amount,
  });
};

const removeFromCart = (state, payload) => {
  console.log('Belum dibuat');
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TO_CART:
      return addToCart(state, action);
    case type.REMOVE_FROM_CART:
      return removeFromCart(state, action);
    default:
      return state;
  }
};

export default cart;
