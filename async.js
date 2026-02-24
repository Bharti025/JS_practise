const express=require("express");

const app=express();

// function second(){
//     console.log("second");
// }

// function first(){
//     second();
//     console.log("first");
// }

// first();

//stack overflow
// function recurse(){
//     console.log("recurse function");
//     recurse();
// }

// recurse();

//setTimeout(callback,delay);
// console.log("Start");
// setTimeout(()=>{
//     console.log("function start",1000);
// });
// console.log("End");

// setTimeout(() => {
//   console.log('Should run after 0ms');
// }, 0);

// Some heavy operation
// for (let i = 0; i < 1000000000; i++) {}

// console.log('Heavy operation done');

//callback
function callback(){
    console.log("Hello world");
}

function greet(name,callback){
    callback();
    return `Hello ${name}`;
}

greet("Bharti",callback);


app.listen(5000,()=>{
    console.log("server is running");
})