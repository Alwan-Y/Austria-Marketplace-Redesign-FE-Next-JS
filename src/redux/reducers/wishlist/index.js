import type from '../../type';

const initialState = {
  wishlist: [
    { id: 1, url: '/image1.jpg', name: 'Baju anu'},
    { id: 2, url: '/image.jpg', name: 'Baju unik'},
    { id: 3, url: '/image1.jpg', name: 'Baju unik'},
  ]
}

const addToWishlist = (state = initialState.wishlist, { payload }) => {
  const item = state.find((item) => item.id === payload.id)

  if (item) {
    return state
  }

  return [ ...state, payload ]
}

const removeFromWishlist = (state = initialState.wishlist, { payload }) => {
  const item = state.find((item) => item.id === payload.id)

  if (item) {
    return state.filter((item) => item.id !== payload.id)
  }

  return state
}

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: addToWishlist(state.wishlist, action)
      }
    case type.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: removeFromWishlist(state.wishlist, action)
      }
    default:
      return state
  }
}

export default wishlist