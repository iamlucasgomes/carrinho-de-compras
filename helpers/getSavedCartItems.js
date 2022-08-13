const getSavedCartItems = () => localStorage.getItem('cartItems');
const getTotalPrice = () => localStorage.getItem('totalPrice');
if (typeof module !== 'undefined') {
  module.exports = { getSavedCartItems, getTotalPrice };
}
