// console.log("Taniya");
// function sync(){
//     console.log("first");
// }
// sync();
// console.log("second");

//async code 
// setTimeout(function(){
//     console.log("third");
// },3000)
// function sync(){
//     console.log("first");
// }
// sync();
// console.log("second");

//promises
// let meraPromise=new Promise(function(resolve,reject){
//     // console.log("i am inside promise");
//     // resolve(1998);
//     setTimeout(function(){
//         console.log("i am inside promise");
//     },5000);
//     // resolve(2233);
//     reject(new Error("bhaisahab error aaya hai"));
// });

// let meraPromise1=new Promise(function(resolve,reject){
//     // console.log("i am inside promise");
//     // resolve(1998);
//     setTimeout(function(){
//         console.log("i am inside promise 1");
//     },5000);
//     // resolve(2233);
//     reject(new Error("bhaisahab error aaya hai"));
// });
// let meraPromise2=new Promise(function(resolve,reject){
//     // console.log("i am inside promise");
//     // resolve(1998);
//     setTimeout(function(){
//         console.log("i am inside promise 2");
//     },3000);
//     // resolve(2233);
//     // reject(new Error("bhaisahab error aaya hai"));
// });

// meraPromise1.then((value) => {console.log(value)});
// meraPromise1.catch((error)=>{console.log("Received an error")});
// console.log("phela");

// let waada1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('setTimeout1 started');
//     },2000);
//     resolve(true);
// })
// let output = waada1.then(()=>{
//     let waada2 = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("setTimeout2 started"); 
//         },3000);
//         resolve("waada2 resolved");
//     })
//     return waada2;
// })
// output.then((value)=>{
//     console.log(value);
// })

// to avoid promises keychaining we use async await
// await tb use hota hai jb hum 1 promise k complete hone k baad hi 2 promise start krna chahte hai 
// async hmesha promise return krta hai

// async function utility(){
//     let delhi = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("delhi mein bahut garmi hai");
//         },5000);
//     });
//     let hyd = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("hyd mein garmi nhi hai");
//         },6000);
//     });
//     let dM=await delhi;
//     let hM=await hyd;

//     return[dM,hM];
// }

// fetch API returns promise
// async function utility(){
//     let content=await  fetch('https://jsonplaceholder.typicode.com/posts/1')
//     console.log(content.status);
//     let output=await content.json();
//     console.log(output);
// }
// utility();

// async function helper(){
// let options={
//     method: 'POST',
//     body: JSON.stringify({
//     title: 'Taniya',
//     body: 'Singla',
//     userId: 19,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// };
//     let content=await fetch('https://jsonplaceholder.typicode.com/posts',options);
//     let response= await content.json();
//     return response;
// }

// async function utility(){
//     let ans =await helper();
//     console.log(ans);
// }

// utility();
// let name="abcd";
function init(){
        var name="mozilla";
        function displayName(){
            // let name="taniya";
        console.log(name);
        }
        return displayName;
    }
let a=init();
a();
// let block scope  
// var globe scope
 
// in case of nested functions always remember the case of closure and references 