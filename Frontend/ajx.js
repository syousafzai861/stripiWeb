console.log("Hey Saif ul islam");

console.log("Ajax tutorial in one video");

// function of getting data
let fetchBtn = document.getElementById("fetch");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("You have clicked the fetchBtn");

  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();
  console.log("On progress");

  // Open the object
  xhr.open("GET", "http://localhost:1337/api/products?populate=*", true);
  console.log("On progress");

  xhr.setRequestHeader(
    "Authorization",
    "Bearer 92ca2f13906177b725691b8f457192a173ba5f978a870fd2fbbefe074c7cbce3d4f5c3153f052ac77abbfbfcc8a52495ca68b0816db52e27221aea74d445c5eeaca78f3e8ad9ecc1ec4915db513ab50f3dfadf067316478a73f51acaaa96defd477afe770f2d5f28ce610e5a39e9d442fb8cd05c3bbf09710cd7844e7e254f8c"
  );
  console.log("On progress");

  xhr.onreadystatechange = function () {
    console.log("Some error occured", this);

    if (this.status === 200) {
      let data = [];
      let x = JSON.parse(this.responseText);
      data = x.data;
      console.log(data);
      data.map((data, index) => {
        return (document.getElementById("table_body").innerHTML += `<tr>
         
        <td>${data.attributes.name}</td>
                    <td>${data.attributes.slug}</td>
                    <td>${data.attributes.description}</td>
                    <td>${data.attributes.color}</td>

                    </tr> `);
      });
    } else {
      console.log("Some error occured");
    }
  };
  xhr.send();
}
// gettting data through ASYNC FUNCTION METHOD
// async function getServerSideProps() {
// // console.log("entered in the function");
//  let headers = {
//     Authorization:
//       "Bearer 108732ab993b1d353a1dd2687b5ecd040d416bcd8061949685410e6288a3ceedb6d7506c562c11b1f4347cfc200dcdeadfae1203f160d71b38a04cbcb0e9dfa23524d0669e417e13b688a579aee43fc7e151a1acbeec3c0e350c52411a2ace11be4907979b27f1631df375f447f09290654d9ad3d768a6309e2c3babcb049cee",
//   };
//   let a = await fetch("http://localhost:1337/api/products?populate=*", {headers:headers});
// //   console.log("api hit kar de ")
//   let product = await a.json();
// //   console.log("response mila?")
//   console.log(product);
// //   console.log("product show karwa dea done")
// }
