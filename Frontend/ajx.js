console.log("Hey Saif ul islam");

console.log("Ajax tutorial in one video");


let fetchBtn = document.getElementById('fetch');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();
    console.log('On progress');

    // Open the object
    xhr.open('GET', 'http://localhost:1337/api/products', true);
    console.log('On progress');


    xhr.setRequestHeader('Authorization', 'Bearer 108732ab993b1d353a1dd2687b5ecd040d416bcd8061949685410e6288a3ceedb6d7506c562c11b1f4347cfc200dcdeadfae1203f160d71b38a04cbcb0e9dfa23524d0669e417e13b688a579aee43fc7e151a1acbeec3c0e350c52411a2ace11be4907979b27f1631df375f447f09290654d9ad3d768a6309e2c3babcb049cee');
    console.log('On progress');


    xhr.onreadystatechange = function () {
        console.log("Some error occured",this)

        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }
    xhr.send();


    console.log("We are done!");

}

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


