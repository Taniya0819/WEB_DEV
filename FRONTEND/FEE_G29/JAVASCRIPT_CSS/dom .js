// selecting an element
let ele=document.querySelector('h1');
console.log(ele);

//selecting by id and class
let parent=document.getElementsByClassName('container');
console.log(parent)[0];

// selecting every element
let elem=document.querySelectorAll('h1');
console.log(elem);

console.log(ele.parentNode);

ele.innerText="<li> today is tuesday </li>";
ele.innerHTML="<li> today is tuesday </li>";

let new_ele=document.createElement('h3');
new_ele.innerText='this is js created heading';

ele.parentNode.appendChild(new_ele);


// changing css
ele.style.backgroundColor="red";

//adding new attribute
ele.className="one";
ele.id="two";

//event listener

ele.addEventListener('click',()=>{
    ele.style.backgroundColor="yellow";
})