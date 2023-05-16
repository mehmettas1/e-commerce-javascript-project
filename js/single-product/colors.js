function colorsFunc(){
    const colors = document.querySelectorAll(".color-wrapper");

    colors.forEach((color)=>{
        color.classList.remove("active");
        color.addEventListener("click",function () {
            color.classList.add("active");
        });
    });
}


export default colorsFunc();