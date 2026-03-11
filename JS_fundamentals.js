
// var x=1;
// var x=2;
// function test(){
//     var y=10;
//     if(true){
//         var y=5;
//     }
//     console.log(y);
// }



// function test(){
//      let y=10;
//      if(true){
//         y=5;
//      }
//      console.log(y);
//  }
// test();
//console.log(x);

let obj1={
    name:"Bharti"
}

// let obj2= obj1;
// obj2.name="shivam";
// console.log(obj1.name);
// console.log(obj2.name);

//primitive
// let x=5;
// let y=5;
// console.log(x===y);

// console.log(5===5);
// console.log("5"===5);
// console.log(true===1);
// console.log(null===undefined);

// console.log(5==5);
// console.log("5"==5);
// console.log(true==1);
// console.log(null==undefined);


// const person={
// name:"Bharti",
// age:24,
// greet:function(){
//     console.log('Hello'+ this.name);
// }
// }

// const person=new Object();
// person.name="Bharti",
// person.age=24,
// person.greet=function{
//     console.log(this.name +this.age)
// }

// function Person(name,age){
//     this.name=name,
//     this.age=age,
//     this.greet=function(){
//         console.log('Hello'+ this.name);
//     }
// }

// class Person{
//   constructor(name,age){
//     this.name=name,
//     this.age=age
//   }
//  greet(){
//      console.log('Hello ' + this.name);
//  }
// }

// const john=new Person("John",21);
// john.greet();

// const person={
//     name:"Bharti",
//     age:21
// }

// Object.freeze(person);
// person.name="Shivam";
// delete person.age;
// console.log(person.name);
// console.log(person.age);

// function greet(name) {
//     console.log('I am '+ name);
// }

// greet('Bharti');

// const greet=function(name){
//     return 'Hello ' + name;
// }

// console.log(greet('John')); 
// const add=(a,b)=> a+b;
// console.log(add(1,2));

// const subtract=(a,b)=>{
//     return a-b;
// }

// console.log(subtract(5,2));

// function mutliple(a){
//     return function multipleof5(b) {
//          return a*b;
//     }
// }


// const nums=[1,2,3,4];
// const result=nums.filter((ele)=>ele%2==0);
// console.log(result);

// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'Bob' }
// ];

// const username=users.some((user)=>user.name=="John");
// console.log(username);

//slice
// const splice1=nums.splice(1,3);
// console.log("splice1",splice1);
// console.log("nums",nums);

// const map=new Map();
// map.set("Bharti",1);
// map.set("Hivam",2);
// map.set("Jai",3);
// map.forEach((value,key)=>{
//     console.log(`${key} :${value}`);
// })

// for(const key of map.keys()){

// }

// getData(function(a){
// getMreData(a,function(b){

// })
// })

//const myPromise=new Promise((resolve,reject)=>{
  // setTimeout(()=>{
  // const success="true";
  // if(success){
  //   resolve("Complete");
//   }
//   else{
//     reject("Failure");
//   }
//   },1000)
// })
// myPromise.then((result)=>console.log(result));

// getData(function(a){
//   getMoreData(a,function(b){
//     getMoreData(b,function(c){
//       getMoreData(c,function(d){
//         console.log("Finally done")
//       })
//     })
//   })
// });

const promise1=fetch('/api/users');
const promise2=fetch('/api/posts');
const promise3=fetch('/api/comments');
Promise.all([promise1,promise2,promise3]).then(([users,posts,comments])=>{
  console.log("All promise resolved")
}).catch(error=>{
  console.log(error);
});

// const user=await fetchUser();
// const posts=await fetchPosts();
// const comments=await fetchComments();

// const [user,posts,comments]=await Promise.all([
// ])

fetch('/api/user').then(response=>response.json()).then(user=>console.log(user));