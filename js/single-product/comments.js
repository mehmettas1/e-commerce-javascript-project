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
    let commentListDom = document.querySelector(".comment-list");
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
       comments.push({text:commentText ,author:commentName})
       let result ="";

       comments.forEach((item)=>{
        result += `
        <li class="comment-item">
                                        <div class="comment-avatar">
                                            <img src="img/avatars/avatar1.jpg" alt="">
                                        </div>
                                        <div class="comment-text">
                                            <ul class="comment-star ">
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
                                                    <i class="bi bi-star-fill"></i>
                                                </li>
                                            </ul>
                                            <div class="comment-meta">
                                                <strong>${item.author}</strong>
                                                <span>-</span>
                                                <time>April 23, 2022</time>
                                            </div>
                                            <div class="comment-description">
                                                <p>${item.text}.</p>
                                            </div>
                                        </div>
                                    </li>
        `
       })
        commentListDom.innerHTML =result;
    }
   
    commentBtnDom.addEventListener("click",addComment)
}
function commentFunc() {
  commentReviewsFunc();
  addNewCommentFunc();
}

export default commentFunc();
