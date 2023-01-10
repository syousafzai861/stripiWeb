console.log("hey i am working ");
let output = "";
const postlist = document.querySelector(".post-list");
const addpostform = document.querySelector(".add-post-form");

const renderposts = (posts) => {
    posts.data.forEach((post => {
        output += `<div class="card mt-4 col-md-6 bg-ligt">
                     <div class="card-body">
                    <h5 class="card-title">${post.attributes.Title}</h5>
                        
                  <p class="card-text">
                        ${post.attributes.Content}
                    </p>
                    <a href="#" class="Edit">Edit</a>
                      <a href="#" class="Delete">Delete</a>
                    </div>`;
      }));
  
      postlist.innerHTML = output;
}

// const url ='http://localhost:1337/api/paragraphs';

fetch("http://localhost:1337/api/paragraphs", {
  method: "GET",
  headers: {
    Authorization:
      "Bearer c3caf881fe46b6b72e7658434c0d60fc84dbbe79ca4d64b8385dbcf57fda026c23fb3d8510aab4aa308e5029628616c157040a1ef6e4af2c347a428dc2dc2df5f6784a2d290f00b469eb7ddc23a4d9eacfa9a221d87c47e4a6a55b2bbff10a09913e2e81647bf5dd36626fd74dc85d4218157d237fcf73a0f8f7f1dbb6d9ac0e",
  },
})
  .then((response) => response.json())
  .then(data => renderposts(data));


  addpostform.addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log("i am submitted")

  })