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
    let comments = [];
    let commentTextDom = document.getElementById("comment-text");
    let commentNameDom = document.getElementById("comment-name");
    let commentBtnDom = document.querySelector(".form-submit input");
    let commentText = ""
    let commentName = ""
   
   commentTextDom.addEventListener("input",function(e){
    commentText = e.target.value;
    console.log(e.target.value);
   })

   commentNameDom.addEventListener("input",function(e){
    commentName = e.target.value;
    console.log(e.target.value);
   })
    function addComment(e){
       e.preventDefault();
       comments.push({text:commentText ,name:commentName})
        
    }
   
    commentBtnDom.addEventListener("click",addComment)
}
function commentFunc() {
  commentReviewsFunc();
  addNewCommentFunc();
}

export default commentFunc();
