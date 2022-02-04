require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  it('testa se fecthProducts é uma função', async () => {
   expect.assertions(1);// verifica a quantidade de verificações dos testes 
    expect(typeof fetchProducts).toBe('function');
  });

   it('testa se a função foi chamada com o argumento "computador"', async() => {
     await fetchProducts('computador');
     const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    expect(fetch).toHaveBeenCalledWith(url);
  }); 
  it('a função fetch utiliza o endpoint correto', async () => {
    const info = await fetchProducts('computador');
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
    expect(fetch).toBeCalledWith(url);
  });
  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async ()=>{
    const info = await fetchProducts('computador');
    expect(info).toBe(computadorSearch);
  })
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.', async() => {
    try{
      await fetchProducts();
    }catch (error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
    
    //expect().toThrow(new Error('You must provide an url'));
  })
});
