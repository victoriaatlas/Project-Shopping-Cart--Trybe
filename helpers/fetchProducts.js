 // const fetch = require('node-fetch');

const fetchProducts = async (paran) => {
  // seu código aqui
  if (!paran) {
    throw new Error('You must provide an url');
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${paran}`);
  const info = await response.json();
   return info;
 };
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
