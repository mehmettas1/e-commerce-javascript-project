const productId = localStorage.getItem("productId") ? 
JSON.parse(localStorage.getItem("productId")) 
:localStorage.setItem("productId",JSON.stringify(1)); 


const products = localStorage.getItem("products") ? 
JSON.parse(localStorage.getItem("products")) 
:localStorage.setItem("products",JSON.stringify([]));

const findProduct = products.find((item)=> item.id=== Number(productId));


//*  product title */
const productTitle = document.querySelector(".product-title");

productTitle.innerHTML =findProduct.name

//* product price//

const newPriceDom = document.querySelector(".new-price");
const oldPriceDom = document.querySelector(".old-price");

newPriceDom.innerHTML = findProduct.price.newPrice.toFixed(2);
oldPriceDom.innerHTML = findProduct.price.oldPrice.toFixed(2);