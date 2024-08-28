// // adding 100 para
// const t1=performance.now();
// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent="This is para "+i;

//     document.body.appendChild(newElement);  //100 times reflow and 100 times repaint 
// }
// const t2=performance.now();
// console.log("this took "+(t2-t1 )+"ms");

// // optimising a bit
// const t3=performance.now();
// let myDiv=document.createElement('div');

// for(let i=1;i<=100;i++){
//     let element=document.createElement  ('p');
//     element.textContent="This is para "+i;

//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv); // //100 times reflow and 100 times repaint 
// const t4=performance.now();
// console.log("this took "+(t4-t3 )+"ms");

// fragments
// const t5=performance.now();
// let fragment=document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent="This is para "+i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);  //1 time reflow and 1 time repaint 
// const t6=performance.now();
// console.log("this took "+(t6-t5 )+"ms");

// Single-threading -> one command at a time 
// JS is a single thread programming language

// function addPara(){
//     let para=document.createElement('p');
//     para.textContent="Js is single threaded";
//     document.body.appendChild(para);
// }  

// function appendNewMessage(){
//     let para=document.createElement('p');
//     para.textContent="Kya haal chaal";
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();

// async code uses JS event loop
// handling is done by the browser
// in setTimeout the time provided is the minimum time to execute the function 
// it is not necessary that it will be executed just after the give time 
  