// Get all <li> elements inside the body
// const list = document.body.querySelectorAll(".myList");
 const element = document.querySelector(".myList .listItem");

// const element = document.getElementsByClassName("listItem");
console.log(typeof(element));
 

console.log(element);
// console.log(element[0].innerHTML);
console.log(element.innerHTML);

element.innerHTML += " Hello World";

console.log(element.innerHTML);

// element[1].innerHTML
