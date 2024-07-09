export const addToCart = (item, quantity = 1) => {
  return {
    type: "ADD_TO_CART",
    payload: { ...item, quantity },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: itemId,
  };
};

export const updateQuantity = (itemId, quantity) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: { id: itemId, quantity },
  };
};
export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
