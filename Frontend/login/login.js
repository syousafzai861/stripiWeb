// import axios from '/login.js';
const btnLogin = document.querySelector(".btn");
// const url = "http://localhost:1337/api/auth/local/register";
const username = document.getElementById("text");
const email = document.getElementById("email");
const password = document.getElementById("Password");

btnLogin.addEventListener( "click", (e) => { 
    e.preventDefault();
    
    axios({
        method: 'post',
        url: 'http://localhost:1337/api/auth/local/register',
        data: {
            "username": username.value,
            "email" : email.value,
            "password" : password.value
        },
        headers: {
            "Authorization": "Bearer d9c5745a0d1788bdeb6bf353ae8f8539b66d37dd09a5a150e58b365f2a9388c6ae8eecb124970aadda9be811cb3c2b037e7d350330a5275ab530e05dfc5020ff0b7e863944e920f7e43819310f28268630a25429e5d7dab502764005f6685ea80d7be387e7ae7bbc9d52460659b5cb9e4ce0c5be5c1a7d4343e956541af9188d",
            "Content-Type": "application/json"
        }
      })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });



});