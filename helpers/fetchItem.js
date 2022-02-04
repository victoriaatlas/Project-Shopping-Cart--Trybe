const fetchItem = async (item) => {
  // seu código aqui
  if (!item) {
    throw new Error('You must provide an url');
  }
  const responseItem = await fetch(`https://api.mercadolibre.com/items/${item}`);
  const infoItem = await responseItem.json();
  return infoItem;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
