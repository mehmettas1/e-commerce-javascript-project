const productId = localStorage.getItem("productId") ? 
JSON.parse(localStorage.getItem("productId")) 
:localStorage.setItem("productId",JSON.stringify(1)); 


console.log(productId);