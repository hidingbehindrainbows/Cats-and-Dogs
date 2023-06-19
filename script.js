'use strict';
// console.log(1);


// let server;

// setTimeout(() => { //example of dependent block of code
//     server = `2`;
//     console.log(2);


// }, 1000);

// // console.log(server); // will be undefined, as it requires info from setTimeout() which is an example of asynchronous code.
// console.log(3);

// // Response is recieved in the form of a promise: 
// // 1.resolve 2. reject 3. pending

// promise.then((data)=>{
//     // dependent block of code goes here 
// }).catch((err)=>{

// });
// // to still have asynchronous code, the undependent code goes here

const box1 = document.querySelector(`#box1`);
const box2 = document.querySelector(`#box2`);
const button1 = document.querySelector(`#butt1`);
const button2 = document.querySelector(`#butt2`);

button1.addEventListener(`click`, catImage);
button2.addEventListener(`click`, dogImage);

function catImage(){
    // fetch(`https://aws.random.cat/meow`)
    fetch(`https://api.thecatapi.com/v1/images/search`)
        .then(res=> res.json())
        .then(data => {
            // console.log(data);
            box1.innerHTML = `<img src=${data[0].url} alt="Cat Image"  width="500" height="600">`;
        });
}
function dogImage(){
    fetch(`https://random.dog/woof.json`)
        .then(res=> res.json())
        .then(data => {
            // console.log(data);
            box2.innerHTML = `<img src=${data.url} alt="Dog Image" width="500" height="600">`;
        });
}

