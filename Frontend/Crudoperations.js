console.log("hey i am working ");
let output = "";
const postlist = document.querySelector(".post-list");
const addpostform = document.querySelector(".add-post-form");
const titlevalue = document.getElementById("title-value");
const bodyvalue = document.getElementById("content-value");
const url = "http://localhost:1337/api/paragraphs";

const renderposts = (posts) => {
  posts.data.forEach((post) => {
    postlist.innerHTML += `<div class="card mt-4 col-md-6 bg-ligt">
                     <div class="card-body" id=${post.id}>
                    <h5 class="card-title">${post.attributes.Title}</h5>
                        
                  <p class="card-text">
                        ${post.attributes.Content}
                    </p>
                    <a href="#" class="Edit" id="editpost">Edit</a>
                      <a href="#" class="Delete" id="deletepost">Delete</a>
                    </div>`;
  });

  //   postlist.innerHTML = output;
};

// const url ='http://localhost:1337/api/paragraphs';
// GETTING YOUR DATA FROM THE API
fetch(url, {
  method: "GET",
  headers: {
    Authorization:
      "Bearer c3caf881fe46b6b72e7658434c0d60fc84dbbe79ca4d64b8385dbcf57fda026c23fb3d8510aab4aa308e5029628616c157040a1ef6e4af2c347a428dc2dc2df5f6784a2d290f00b469eb7ddc23a4d9eacfa9a221d87c47e4a6a55b2bbff10a09913e2e81647bf5dd36626fd74dc85d4218157d237fcf73a0f8f7f1dbb6d9ac0e",
  },
})
  .then((response) => response.json())
  .then((data) => {
    // console.log("renderposts",data)
    renderposts(data);
  });

postlist.addEventListener("click", (e) => {
  e.preventDefault();
  let deletepost = e.target.id == "deletepost";
  let Editpost = e.target.id == "editpost";
  let id = e.target.parentElement.id;
  if (deletepost) {
    fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer c3caf881fe46b6b72e7658434c0d60fc84dbbe79ca4d64b8385dbcf57fda026c23fb3d8510aab4aa308e5029628616c157040a1ef6e4af2c347a428dc2dc2df5f6784a2d290f00b469eb7ddc23a4d9eacfa9a221d87c47e4a6a55b2bbff10a09913e2e81647bf5dd36626fd74dc85d4218157d237fcf73a0f8f7f1dbb6d9ac0e",
          "Content-Type": " application/json",
      },
    })
      .then((res) => res.json())
      .then(() => location.reload());
  }
});
//   POSTING THE DATA
addpostform.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("i am submitted")
  // console.log(titlevalue.value);
  let data3 = { data: { Title: titlevalue.value, Content: bodyvalue.value } };
  //   console.log("data", data3);
  fetch(url, {
    method: "POST",
    headers: {
      Authorization:
        "Bearer c3caf881fe46b6b72e7658434c0d60fc84dbbe79ca4d64b8385dbcf57fda026c23fb3d8510aab4aa308e5029628616c157040a1ef6e4af2c347a428dc2dc2df5f6784a2d290f00b469eb7ddc23a4d9eacfa9a221d87c47e4a6a55b2bbff10a09913e2e81647bf5dd36626fd74dc85d4218157d237fcf73a0f8f7f1dbb6d9ac0e",
      "Content-Type": " application/json",
    },

    body: JSON.stringify(data3),
  })
    .then((res) => {
      //   console.log("data", res.status);
      if (res.status === 200) {
        // renderposts();
        fetch(url, {
          method: "GET",
          headers: {
            Authorization:
              "Bearer c3caf881fe46b6b72e7658434c0d60fc84dbbe79ca4d64b8385dbcf57fda026c23fb3d8510aab4aa308e5029628616c157040a1ef6e4af2c347a428dc2dc2df5f6784a2d290f00b469eb7ddc23a4d9eacfa9a221d87c47e4a6a55b2bbff10a09913e2e81647bf5dd36626fd74dc85d4218157d237fcf73a0f8f7f1dbb6d9ac0e",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            //   console.log("renderposts",data)
            renderposts(data);
          });
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
  // .then((data) => {
  //   const dataArr = [];
  //   dataArr.push(data);
  //   renderposts(dataArr);
  // });
});
