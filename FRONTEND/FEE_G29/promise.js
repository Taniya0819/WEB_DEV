// promise object explanation

// let waiter_ratings=0;

// let p=new Promise((resolve,reject)=>{
//     let chai=['sugar','milk','tea_leaves'];

//     if(chai.length==3){
//         resolve(waiter_ratings+=5);
//     }
//     else{
//         reject(waiter_ratings);
//     }
//     return waiter_ratings;
// })

// p.then(message=>{
//     console.log(`chai ban gyi hai ratings: ${message}`)
// }).catch(message=>{
//     console.log(`chai nhi bani :(Ratings: ${message}`)
// })


// simple function
// function dataleaao(){
//     return `data returned by simple function`;
// }
// console.log(dataleaao());

//async function
// async function dataleaao2(){
//     return ('data returned by async function');
// }
// console.log(dataleaao2());

//example 2 await

// let p=new Promise ((resolve,reject)=>{
//     resolve('This data is returned by promise');
// })

// async function getData(){

//     //data fetching
//     console.log(p);
//     p.then(res => console.log(res));

//     //first modification
//     console.log('first');

//     //last modification
//     console.log('second');
// }
//getData();


// async await
// let p=new Promise ((resolve,reject)=>{
//     resolve('This data is returned by promise');
// })

// async function getData(){

//     //data fetching
//     console.log(p);
//     await p.then(res => console.log(res));

//     //first modification
//     console.log('first');

//     //last modification
//     console.log('second');
// }
// getData();

//example 3 using more than one promise

// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('this is return value of promise1.')
//     },5000);
// })

// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('this is return value of promise2.')
//     },7000);
// })

// let p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('this is return value of promise3.')
//     },10000);
// })

// async function getTheData(){
//     p1.then((val)=>console.log(val));
//     console.log('first');

//     p2.then((val)=>console.log(val));
//     console.log('second');

//     p3.then((val)=>console.log(val));
//     console.log('third');
// }
// getTheData();


// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('this is return value of promise1.')
//     },10000);
// })

// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('this is return value of promise2.')
//     },7000);
// })

// let p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('this is return value of promise3.')
//     },5000);
// })

// async function getTheData(){
//     p1.then((val)=>console.log(val));
//     console.log('first');

//     p2.then((val)=>console.log(val));
//     console.log('second');

//     p3.then((val)=>console.log(val));
//     console.log('third');
// }
// getTheData();

// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('this is return value of promise1.')
//     },10000);
// })

// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('this is return value of promise2.')
//     },7000);
// })

// let p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('this is return value of promise3.')
//     },5000);
// })

// async function getTheData(){
//     await p1.then((val)=>console.log(val));
//     console.log('first');

//     await p2.then((val)=>console.log(val));
//     console.log('second');

//     await p3.then((val)=>console.log(val));
//     console.log('third');
// }
// getTheData();


// exapmle 4 application:

// async function getMyData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('data is here...');
//         },3500)
//     })
// }

// console.log('Module Loading');
// console.log("work1");
// console.log('data fetching');
// console.log(getMyData());
// let p=getMyData();
//     p.then((val)=>{console.log(val)})

// console.log('data modification');
// console.log('final data presentation');


async function getMyData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('data is here...');
        },3500)
    })
}

// async function main(){
// console.log('Module Loading');
// console.log("work1");
// console.log('data fetching');
// console.log(getMyData());
// let p=await getMyData();
//     // p.then((val)=>{console.log(val)})
//     console.log(p)
// console.log('data modification');
// console.log('final data presentation');
// }
// main();

async function modifyData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('your data is here...');
        },3500)
    })
}

// async function main(){
//     console.log('Module Loading');
//     console.log("work1");
//     console.log('data fetching');
//     console.log(getMyData());
//     let p=await getMyData();
//         // p.then((val)=>{console.log(val)})
//         console.log(p)
//     console.log('data modification');
//     let m= await modifyData();
//         console.log(m)
//     console.log('final data presentation');
// }
// main();