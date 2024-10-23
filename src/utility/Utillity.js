// get data from local store --------------->
const getLocalStoreData = () => {
  const getCartData = localStorage.getItem("cart");
  if (getCartData) {
    const cartData = JSON.parse(getCartData);
    return cartData;
  }
  return [];
};

// set data to local store --------------->
const setDataToLocalStore = (cart) => {
  const setData = JSON.stringify(cart);
  localStorage.setItem("cart", setData);
};

// remove data to local store ------------>
const removeDataToLocalStore = (cartId) => {
  const getData = getLocalStoreData();
  const removeItems = getData.filter((remove) => remove !== cartId);
  setDataToLocalStore(removeItems);
};

// data add to local store --------------->
const addCartToLocalStore = (productId) => {
  const cartData = getLocalStoreData();
  cartData.push(productId);
  setDataToLocalStore(cartData);
};

export { addCartToLocalStore, getLocalStoreData, removeDataToLocalStore };
