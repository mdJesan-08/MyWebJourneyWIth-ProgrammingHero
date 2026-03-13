let btn_1 = document.querySelector(".add");
// let btn_2 = document.querySelector(".remove");

let status = document.querySelector("h2");


let flag = 0;

btn_1.addEventListener("click", function()
    {
        if(flag === 0)
        {
            btn_1.innerHTML = "Remove From Friends";
            status.innerHTML = "Friends";
            flag = 1;
        }
        else
        {
            btn_1.innerHTML = "Add Friend";
            status.innerHTML = "Unknown";
            flag = 0;
        }

        
    })

