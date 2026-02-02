let bulb = document.querySelector(".light-bulb");
let btn = document.querySelector("button");


let flag = 0;

btn.addEventListener("click", function()
    {
        if(flag === 0)
        {
            bulb.style.backgroundColor = "rgb(21, 209, 71)";
            flag = 1;
        }
        else 
        {
            bulb.style.backgroundColor = "yellow";
            flag = 0;           
        }


    })


