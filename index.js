// 1. Ways to print in javascript
// document.write("This is document write")
// alert("me")

// 2. JavaScript Console API
// console.log("Hello World!", 4 + 6, "Another log")
// console.warn("This is warrning")
// console.error("This is an error")

// 3. JavaScript Variables
// What are variables? - Containers to store data values

/*
multi 
line 
comment
*/

var number1 = 34
var number2 = 56
// console.log(number1 + number2)

// 4. Data types in JavaScript
//Numbers
var num1 = 455
var num2 = 56.76

//String
var str1 = "This is a string";
var str2 = 'This is also a string'
 
//Objects
var marks = {
    ravi : 39,
    shubham: 22,
    harry: 19.99
}
// console.log(marks)

//Booleans
var a = true;
var b = false;
// console.log(a,b)

//var und = undefined;
var und;
// console.log(und)

var n = null;
// console.log(n)

/*
At a very high level, there are two types of datatypes in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects

*/

var arr = [1,2,"string",4,5]
// console.log(arr)

// Operators in JavaScript
// Arithmetic Operators
var a = 34;
var b = 56;
// console.log("The value of a + b is", a+b);
// console.log("The value of a - b is", a-b);
// console.log("The value of a * b is", a*b);
// console.log("The value of a / b is", a/b);

// Assignment Operators
var c = b;
c += 2;
//console.log(c);

//Comparision Operators
var x = 32;
var y = 56;
// console.log(x == y)
// console.log(x <= y)

//Logical Operators

//Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);

//Logical or
// console.log(true || true);
// console.log(false || true);
// console.log(false || false)

//Logical not
// console.log(!false);
// console.log(!true);

//Function in JavaScript
//DRY = Do not repeat yourself
function avg(a, b){
    return (a+b)/2
}

c1 = avg(4,6)
c2 = avg(14,16)
// console.log(c1, c2)

//Conditionals in JavaScript
/*
var age = 74;
//Single if statement
// if (age > 8){
//     console.log("You are not a kid")
// }

// if - else statement
// if (age > 8){
//     console.log("You are not a kid")
// }
// else{
//     console.log("You are a kid")
// }

// if-else Ladder
if(age > 18 && age < 65){
    console.log("You are not a kid")
}
else if(age>65){
    console.log("You are old")
}
else{
    console.log("You are kid")
}
console.log("End of ladder")
*/

var arr = [1,2,3,4,5,6,7]
// console.log(arr)
// console.log(arr.length)
// for(var i=0;i<arr.length;i++){
//     if(i == 2){
//         // break;
//         continue; 
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element)
// })
// const ac = 0;
// ac = ac + 1;
let j = 0;
// while(j<arr.length){
//     console.log(arr[j])
//     j++;
// }

// do{
//     console.log(arr[j])
//     j++;
// }while(j<arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Sijan")
// myArr.shift()
// myArr.toString()
// myArr.sort() // sorts alphabetically
// const newLen = myArr.unshift("Sijan");
// console.log(newLen)
// console.log(myArr)

//Strings methods in JavaScript
let myLovelyString = "Sijan is a good boy good good";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"));
// console.log(myLovelyString.slice(1,4))
let d = myLovelyString.replace("Sijan","Paudel")
// d = d.replace("good","bad");
// console.log(d);

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes())
// console.log(myDate.getHours());

// DOM Manipulation
let elem = document.getElementById("click");
// console.log(elem)

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass)
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)

tn = document.getElementsByTagName("div")
// console.log(tn)
let createdElement = document.createElement("p");
createdElement.innerText = "This is a created para"
tn[0].appendChild(createdElement);
let createdElement2 = document.createElement("b");
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
tn[0].removeChild(createdElement2)

//Selecting using query
// sel = document.querySelector(".container")
// console.log(sel)
// let sel = document.querySelectorAll(".container");
// console.log(sel)

function clicked(){
    console.log("The button was clicked.")
}
// window.onload = function(){
//     console.log("The document was loaded.")
// }

// Events in JavaScript
const firstCont = document.getElementById("firstContainer");
// firstCont.addEventListener("click", function(){
//     document.querySelectorAll(".container")[1].innerHTML="<b>We have clicked</b>"
//     console.log("Clicked on Container")
// })
// firstCont.addEventListener("mouseover",function(){
//     console.log("Mouse on container")
// })

// firstCont.addEventListener("mouseout", function(){
//     console.log("Mouse out of container")
// })

// let prevHTML = document.querySelectorAll(".container")[1].innerHTML
// firstCont.addEventListener("mouseup",function(){
//     document.querySelectorAll(".container")[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on container")
// })

// firstCont.addEventListener("mousedown",function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b>We have clicked</b>"
//     console.log("Mouse down when clicked on container.")
// })

//Arrow Functions
// function sum(a,b){
//     return a+b;
// }
sum = (a,b) =>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll(".container")[1].innerHTML = "<b>Set Timeout Fired</b>"
    console.log("I am your log")
}

// SetTimeout and SetInterval
// clr = setTimeout(logKaro,3000);
// clr = setInterval(logKaro,2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
// localStorage.setItem("name","Sijan")
// localStorage
// localStorage.getItem("name")
// localStorage.removeItem("name")
// localStorage.clear()

// JSON
// A valid JSON must have double quotes
obj = {name: "Sijan", length: 1}
jso = JSON.stringify(obj)
// console.log(typeof jso)
// console.log(jso)
parsed = JSON.parse(jso)
console.log(parsed)
console.log(typeof parsed)

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`);