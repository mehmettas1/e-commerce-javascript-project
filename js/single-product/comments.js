const commentReviewsFunc = function() {
    const commentStarsDom = document.querySelectorAll(".comment-form-rating .star")
    commentStarsDom.forEach((item) =>{
        item.addEventListener("click", ()=>{
            commentStarsDom.forEach((star) =>star.classList.remove("active"))
            item.classList.add("active");
        })
    })
};


const addNewCommentFunc = () =>{
    let commentTextDom = document.getElementById("comment-text")
}
function commentFunc() {
  commentReviewsFunc();
  addNewCommentFunc();
}

export default commentFunc();
