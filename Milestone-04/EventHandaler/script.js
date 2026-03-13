console.log("Hello from js");
let btn = document.getElementById("my-btn");
console.log(btn);

btn.addEventListener("click", function btnListen()
{
    // console.log("Hello from Button");
    let myTitle = document.getElementById("page-title");
    console.log(myTitle);
    myTitle.innerText = "Changed";
    
    
})

