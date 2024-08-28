const myObj={
    //properties
    firstname:'taniya',
    lastname:"singla",
    roll:2448,
    //method property
    getFullName:function(){
        return `${this.firstname} ${this.fullname}`
    }
}
// accessing an object
console.log(myObj.roll);
console.log(myObj.getFullName());
console.log(myObj[`firstname`]);

function myFunc4(genObj){
    return genObj.roll;
}
console.log(myFunc4(myObj));
