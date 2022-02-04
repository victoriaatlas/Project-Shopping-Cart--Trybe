require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  it("testar se fetchItem é uma função",() => {
    expect(typeof fetchItem).toBe('function')
  });
  it('a função fetchIntem com o argumento do item "MLB1615760527" e teste se fetch foi chamado', async () => {
    await fetchItem('MLB1615760527');
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(url);
  })
   it('ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fecth ultiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527 "', async ()=> {
    const data = await fetchItem('MLB1615760527');
    const url = ('https://api.mercadolibre.com/items/MLB1615760527')
    expect(fetch).toHaveBeenCalledWith(url);
  }) 
  it('o retorno da função fetchI tem como argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item',async()=> {
    const data = await fetchItem('MLB1615760527');
    expect(data).toBe(item);
  })
  it(' ao chamar a função fetchItemsem argumento, retorna um erro com a mensagem: You must provide an url', async ()=>{
    try{
      await fetchItem();
    }catch (error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
  })
});
