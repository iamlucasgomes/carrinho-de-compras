const fetchItem = async (itemId) => {
  const endpoint = `https://api.mercadolibre.com/items/${itemId}`;
  try {
   const response = await fetch(endpoint);
   const data = await response.json();
   return data;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
