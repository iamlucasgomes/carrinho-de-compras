const saveCartItems = (value) => localStorage.setItem('cartItems', value);
const saveTotalPrice = (value) => localStorage.setItem('totalPrice', value);

if (typeof module !== 'undefined') {
  module.exports = { saveCartItems, saveTotalPrice };
}
