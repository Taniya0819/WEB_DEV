// to use custom attribute in query selector this is the syntax
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-length]");
const passwordDisplay= document.querySelector("[data-passworDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck= document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generate-button");
// last wale ka mtlb hai k jis input ki type checkbox hai voh saare 
const allCheckBox = document.querySelectorAll("input[type=checkbox");

let password="";
let passwordLength=10;
let checkCount=1;

