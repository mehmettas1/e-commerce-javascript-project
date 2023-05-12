import { cart } from "./products.js";
console.log(cart);
function displayCartProduct(){
    const result ="";
  cart.forEach((item) =>{
    console.log(item);
  });

}

displayCartProduct()