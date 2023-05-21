const commentReviewsFunc = function() {
    const commentStarsDom = document.querySelectorAll(".comment-form-rating .star")
    commentStarsDom.forEach((item) =>{
        item.addEventListener("click", ()=>{
            item.classList.add("active")
        })
    })


function commentFunc() {
  commentReviewsFunc();
}

export default commentFunc();
