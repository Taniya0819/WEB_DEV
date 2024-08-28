// let a={} 
// here a is an empty object

// console.log('hi');

//creating an object
// let rectangle={
//     //properties
//     length:1,
//     breadth:2,

//     //behaviour
//     draw: function() {
//         console.log('drawing a rectangle');
//     }
// };

// how to create an Object ->
// factory function
// constructor function

//factory function ->
// function createRectangle() {
//     let rectangle={     
//     length:1,
//     breadth:2,

//         draw: function() {
//             console.log('drawing a rectangle');
//         }
//     };
//     return rectangle;   
//     // for response/output
// }
// let ractangleObj1=createRectangle();

// function createRectangle(len,bre) {
//     let rectangle={     
//     length: len,
//     breadth: bre,

//         draw: function() {
//             console.log('drawing a rectangle');
//         }
//     };
//     return rectangle;   
// }
// let rectangleObj1=createRectangle(5,6);

// constructor function -> pascal notation -> first letter of each word is capital
// this -> current object/empty object 

// function Rectangle() {
//     this.length=1;
//     this.breadth=2;
//     this.draw= function() {
//         console.log('drawing');
//     }
// }
// let rectangleObject=new Rectangle();

function Rectangle(len,bre) {
    this.length=len;
    this.breadth=bre;
    this.draw= function() {
        console.log('drawing');
    }
}
let rectangleObject=new Rectangle(4,6);

rectangleObject.color='yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);

// creating object using constructor function
// new -> keyword is used to return an empty object

// function -> object -> constructor
// function is also an object 