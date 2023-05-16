function colorsFunc(){
    const colors = document.querySelectorAll(".color-wrapper");

    colors.forEach((color)=>{
        
        color.addEventListener("click",function () {
            colors.forEach((item) =>{
               
                    item.classList.remove("active")
                
            })
            color.classList.add("active");
        });
    });
}


export default colorsFunc();
