function productsFunc(){
   const products = JSON.parse(localStorage.getItem("products"));


   products.forEach((item) =>{
    let results = "";
    console.log(item.price);
    results += `
    `
   })
}

export default productsFunc();