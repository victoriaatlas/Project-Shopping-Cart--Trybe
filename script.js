function createProductImageElement(imageSource) { // função que adiciona imagem no site
  const img = document.createElement('img'); // cria um elemento imagem no HTML 
  img.className = 'item__image'; // adiciona uma classe
  img.src = imageSource; // ele busca essa imagem atraves do parametro passado nessa função
  return img; // retorna a imagem
} 

function createCustomElement(element, className, innerText) { // função para criar elementos
  const e = document.createElement(element); // constante que farma elmentos atraves do parametro passado nessa função
  e.className = className; // farme de classes para elementos 
  e.innerText = innerText; // farme de indexação de no HTML
  return e; // retorno da função
}

function createProductItemElement({ sku, name, image }) { //  recebe um obj como parametro 
  const section = document.createElement('section'); 
  section.className = 'item';
  const produtos = document.querySelector('.items');

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  produtos.appendChild(section);
}

/* function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText; // filtra  && pega texto no spam
} */

function cartItemClickListener(event) {
  // coloque seu código aqui
  const carrin = querySelector('.cart__item');
  event.target.classList.add(carrin);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  const lista = document.querySelector('.cart_Items');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  lista.appendChild(li);
}

function intemOnCart(lista) {
  lista.forEach((elements) => {
    createCartItemElement({
      sku: elements.id,
      name: elements.title,
      Saleprice: elements.price,
    });
  });
}
function addList(product) { // função que recebe minha API e cria um obj
 product.forEach((element) => { // for que passa por toda minha API
   createProductItemElement({ // puxa a função createProductItemElement e formata minha API como obj que será entregue como paramentro da função
     sku: element.id, // recebe como valor a chave: id da API
     name: element.title, //  recebe como valor a chave: name 
     image: element.thumbnail, // recebe como valor chave: thumbnail 
   });
 });
}
window.onload = async () => {
  const products = await fetchProducts('computador');
  // console.log(products);
  addList(products.results);
  const items = await fetchItem('MLB1341706310');
  // console.log(items);
  intemOnCart(items.results);
 };