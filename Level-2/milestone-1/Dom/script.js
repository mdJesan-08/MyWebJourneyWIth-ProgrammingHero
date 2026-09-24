console.log("We are connected");

const btn = document.querySelector("#addBtn");
console.log(btn);

const taskInput = document.querySelector("#taskInput");
console.log(taskInput);

const taskList = document.querySelector("#taskList");
// console.log(taskInput);

btn.addEventListener("click",() =>
{
    console.log("Btn clicked");
    let li = document.createElement("li");
    // console.log(li);
    li.innerText = taskInput.value;
    taskList.appendChild(li);


    console.log(taskInput.value);

})


let li = document.createElement("li");
console.log(li);
