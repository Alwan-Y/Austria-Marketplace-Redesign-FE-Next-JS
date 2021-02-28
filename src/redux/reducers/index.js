import { combineReducers } from 'redux'
import wishlist from '../reducers/wishlist'
import Type from '../type';

const initialState = {
  items: [1, 2, 3, 4, 5],
  catalog: [9, 8, 7, 6, 5],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.Items:
      return Object.assign({}, state, {
        items: action.payload,
      });
    case Type.Catalog:
      return Object.assign({}, state, {
        catalog: action.payload,
      });
    default:
      return state;
  }
};

export default combineReducers({
  wishlist,
  reducer
})
