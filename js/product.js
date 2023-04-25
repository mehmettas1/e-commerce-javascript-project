import {product1} from "./glide.js";

let products = [];








async  function productsFunc(){

  products = (await localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : [];

    const productsContainer = document.getElementById("product-list")
   

   products.forEach((item) =>{
    let results = "";
    console.log(item.price);
    results += `
    <li class="product-item glide__slide">
    <div class="product-image">
      <a href="#">
        <img src="img/products/product1/1.png" alt="" class="img1">
        <img src="img/products/product1/2.png" alt="" class="img2">
      </a>
    </div>
    <div class="product-info">
      <a href="$" class="product-title">Analogue Resin Strap</a>
      <ul class="product-star">
        <li>
          <i class="bi bi-star-fill"></i>
        </li>
        <li>
          <i class="bi bi-star-fill"></i>
        </li>
        <li>
          <i class="bi bi-star-fill"></i>
        </li>
        <li>
          <i class="bi bi-star-fill"></i>
        </li>
        <li>
          <i class="bi bi-star-half"></i>
        </li>
      </ul>
      <div class="product-prices">
        <strong class="new-price">$108.00</strong>
        <span class="old-price">$165.00</span>
      </div>
      <span class="product-discount">-17%</span>
      <div class="product-links">
        <button>
          <i class="bi bi-basket-fill"></i>
        </button>
        <button>
          <i class="bi bi-heart-fill"></i>
        </button>
        <a href="#">
          <i class="bi bi-eye-fill"></i>
        </a>
        <a href="#">
          <i class="bi bi-share-fill"></i>
        </a>
      </div>
    </div>
  </li>
    `;
    console.log(productsContainer);
   })
   product1
}

export default productsFunc();