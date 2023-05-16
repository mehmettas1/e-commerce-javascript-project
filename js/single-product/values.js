function valuesFunc(){
    const valuesDom = document.querySelectorAll(".values-list span");

   valuesDom.forEach((value)=>{
    value.addEventListener("click",function(){
        valuesDom.forEach((item) =>{
            item.classList.remove("active")
        });
        value.classList.add("active")
    })
   })
}

export default valuesFunc();