console.log("Hey Saif ul islam");

console.log("Ajax tutorial in one video");

let fetchBtn = document.getElementById("fetch");
fetchBtn.addEventListener("click", getServerSideProps);

async function getServerSideProps() {
console.log("entered in the function");
 let headers = {
    Authorization:
      "Bearer 108732ab993b1d353a1dd2687b5ecd040d416bcd8061949685410e6288a3ceedb6d7506c562c11b1f4347cfc200dcdeadfae1203f160d71b38a04cbcb0e9dfa23524d0669e417e13b688a579aee43fc7e151a1acbeec3c0e350c52411a2ace11be4907979b27f1631df375f447f09290654d9ad3d768a6309e2c3babcb049cee",
  };
  let a = await fetch("http://localhost:1337/api/products?populate=*", {headers:headers});
  console.log("api hit kar de ")
  let product = await a.json();
  console.log("response mila?")
  console.log(product);
  console.log("product show karwa dea done")
}
// function buttonClickHandler() {
//      console.log('You have clicked the fetchBtn');

//     // Instantiate an xhr object
//     const xhr = new XMLHttpRequest();

// Open the object
// xhr.open('GET', 'http://localhost:1337/api/products', true);
// xhr.getResponseHeader('Authorization', 'Bearer f247f12939ec0d8a2de9c5c5b8c6f9a1a7d9fd6f3add79549f27f8b83877d3ab6d61db8a432697d655b26086a2ad093ef99a23b0cdebf4245e107280d0b69ec2fa610161fad5fc9c94a1dcee6543ac70bf487141d5f0a6e3c291c6f4c2ab5896d9c90495bf84f44364d2ff53730667cc01f1ad5089ccd31952e05ae4f1fbb747');

// USE THIS FOR POST REQUEST
// xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);

// What to do on progress (optional)
// xhr.onprogress = function(){
//     console.log('On progress');
// }

// xhr.onreadystatechange = function () {
//     console.log('ready state is ', xhr.readyState);

// }

// What to do when response is ready
// xhr.onload = function () {
//     console.log("Some error occured",this)

//     if(this.status === 200){

//         console.log(this.responseText)
//     }
//     else{
//         console.log("Some error occured")
//     }
// }

// send the request
// params = `{"name":"test34sad545","salary":"123","age":"23"}`;
//     xhr.send();

//     console.log("We are done!");

// }

// let popBtn = document.getElementById('popBtn');
// popBtn.addEventListener('click', popHandler);

// function popHandler() {
//     console.log('You have clicked the pop handler');

//     // Instantiate an xhr object
//     const xhr = new XMLHttpRequest();

//     // Open the object
//     xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

//     // What to do when response is ready
//     xhr.onload = function () {
//         if(this.status === 200){
//             let obj = JSON.parse(this.responseText);
//             console.log(obj);
//             let list = document.getElementById('list');
//             str = "";
//             for (key in obj)
//             {
//                 str += `<li>${obj[key].employee_name} </li>`;
//             }
//             list.innerHTML = str;
//         }
//         else{
//             console.log("Some error occured")
//         }
//     }

//     // send the request
//     xhr.send();
//     console.log("We are done fetching employees!");

// }
