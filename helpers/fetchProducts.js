const fetchProducts = async (computador) => {
  // seu código aqui
  if (!computador) {
    throw new Error('You must provide an url');
  }
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  const info = response.json();
  return info;
 };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
