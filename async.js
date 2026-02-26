const express=require("express");
const { getDefaultAutoSelectFamily } = require("node:net");

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
// function callback(){
//     console.log("Hello world");
// }

// function greet(name,callback){
//     callback();
//     return `Hello ${name}`;
// }

// greet("Bharti",callback);


// getData().then(getMoreData)
// .then(getMoreData)
// .then(getMoreData)
// .then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err);
// })

// async function fetchData(){
// const a=await getData();
// const b=getMoreData(a);
// const c=getMoreData(b);
// const d= getMoreData(c);
// return d;
// }

// fetchData();

// const myPromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       const success=true;
//       if(success){
//         resolve("Mission succesful");
//       }
//       else{
//         reject("Mission rejected");
//       }
//     },1000);
// });

// myPromise.then(result=>{
//     console.log(result);
// }).catch(err=>console.log(err));


//promise methods
//all
// const promise1 = fetch('/api/users');
// const promise2 = fetch('/api/posts');
// const promise3 = fetch('/api/comments');
// Promise.all([promise1,promise2,promise3])
// .then(([users,posts,comments])=>{
//     console.log('All data loaded:', users, posts, comments);
// }) .catch(error => {
//     console.log('One of the requests failed:', error);
//   });


// async function fetchData(){
//     try {
//     const response = await fetch('/api/data');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log('Error:', error);
//     throw error; // Re-throw if needed
//   }
// }

// fetchData();

// async function parallel(){
// const [user,posts,comments]=await Promise.all([
//     fetchUser(),
//     fetchPosts(),
//     fetchComments()
// ])
// }
  
//fetch
// fetch('https://api.example.com/users')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

//async and await
async function getUsers() {
  try {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   if(!response.ok){
    throw new Error("HTTP ERROR");
   }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}


getUsers();
app.listen(5000,()=>{
    console.log("server is running");
})