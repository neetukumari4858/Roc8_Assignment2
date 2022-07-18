const cartReducer = (cartState, action) => {
  const { cart, watchLater } = cartState;
  const cartItem = cart.find((cartItem) => cartItem._id === action.payload._id);
  const watchLaterItem = watchLater.find(
    (watchLaterItem) => watchLaterItem._id === action.payload._id
  );

  switch (action.type) {
    case "ADD_TO_CART":
      if (cartItem) {
        return { ...cartState };
      } else {
        return { ...cartState, cart: [...cartState.cart, action.payload] };
      }

    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cart: [...cart.filter((item) => item._id !== action.payload._id)]
      };
    case "ADD_SAVE_LATER":
      if (watchLaterItem) {
        return { ...cartState };
      } else {
        return {
          ...cartState,
          watchLater: [...cartState.watchLater, action.payload],
          cart: [...cart.filter((item) => item._id !== action.payload._id)]
        };
      }
    case "INCREAMENT":
      return {
        ...cartState,
        cart: cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, Quentity: item.Quentity + 1 }
            : item
        )
      };
    case "DECREAMENT":
      return {
        ...cartState,
        cart: cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, Quentity: item.Quentity - 1 }
            : item
        )
      };

    case "MOVE_TO_CART":
      if (cartItem) {
        return { ...cartState };
      } else {
        return {
          ...cartState,
          cart: [...cartState.cart, action.payload],
          watchLater: [
            ...watchLater.filter((item) => item._id !== action.payload._id)
          ]
        };
      }

    case "REMOVE_FROM_SAVELATER":
      return {
        ...cartState,
        watchLater: [
          ...watchLater.filter((item) => item._id !== action.payload._id)
        ]
      };

    default:
      return { ...cartState };
  }
};
export { cartReducer };
