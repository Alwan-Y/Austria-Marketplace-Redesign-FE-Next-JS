import type from '../../type';

const initialState = {
  items: []
};

const addToCart = (state = initialState.items, { payload }) => {
  // console.log(state)

  const item = state.find((item) => item.payload.name === payload.name || item.name === payload.name);

  if (item) {
    const items = state.filter(item => item.payload.name !== payload.name)
    console.log(items)

    let quantity = item.quantity++

    const newItem = {
      item,
      quantity: quantity,
      totalPrice: item.totalPrice * quantity 
    }

    // console.log(newItem)
    const newState = items.concat(newItem)
    console.log(newState)
  
  }

  const newPayload = {
    payload,
    quantity: 1,
    totalPrice: payload.price
  }

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
        items: addToCart(state.items, action)
      };
    case type.REMOVE_FROM_CART:
      return removeFromCart(state, action);
    default:
      return state;
  }
};

export default cart;
