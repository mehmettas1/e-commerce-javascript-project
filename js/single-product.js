const productId = localStorage.getItem("productId") ? 
JSON.parse(localStorage.getItem("productId")) 
:localStorage.setItem("productId",JSON.stringify(1)); 


const products = localStorage.getItem("products") ? 
JSON.parse(localStorage.getItem("products")) 
:localStorage.setItem("products",JSON.stringify([]));

const findProduct = products.find((item)=> item.id=== Number(productId));

const productTitle = document.querySelector(".product-title");

productTitle.innerHTML =findProduct.name

