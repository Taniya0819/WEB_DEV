// function abc()
// {
//     console.log(name)
//     return 5;
// }
// console.log(abc("John"))

// function expression
// showdetails=function(n)
// {
//     console.log("hii" + " " + n)
// }
// showdetails(1)

// arrow function
// displaydetails=add=>50+30
// console.log(displaydetails())

// let obj1={
//     age:21,
//     subject:["DSA","AIML",[100,80]],
//     showdetails:function()
//     {
//         console.log('Name=${obj1.firstname} Lastname=${obj1.lastname}');
//     },
//     showsubject:function()
//     {
//         for(let i=0;i<obj1.subject.length-1;i++)
//         {
//             console.log('${obj1.subject[i]} ${obj1.subject[{obj1.subject[i]}]}')
//         }
//     }
// }

// THIS keyword is very imp topic


// ANSARI SIR

// 1
// function myFunc(){
//     return "your output";
// }
// console.log(myFunc());

// 2
// function myFunc2(num){
//     return num;
// }
// console.log(myFunc2())

// function myFunc2(num){
//     return num;
// }
// console.log(myFunc2(5))

// 3
// function myFunc3(...num){
//     return num;
// }
// console.log(myFunc3(200,400,600));

// 4 
// function userLogIn(name='admin'){
//     return `${name} logged in`;
// }
// console.log(userLogIn("taniya"));

//5

// let myArray=[1,2,3,4,5];
// function myArrayAdd(arr){
//     let result=0;
//     myArray.forEach(element =>{
//             result+=element;
//         });
//         return result;
// }
// console.log(myArrayAdd([1,2,3,4,5]));



// ARROW FUNCTION
//small syntax
// this

//1 
function sum(a,b){
    return a+b;
}

let sum2= (a,b) => a+b;
console.log(sum(3,4));
console.log(sum2(3,4));

let isPositive2=(num) => num >= 0;

//3 
function randomNum(){
    return Math.random();
}

let randomNum2=() => Math.random();

//4
document.addEventListener('click',function)