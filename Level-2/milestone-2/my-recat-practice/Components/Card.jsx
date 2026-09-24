import { useState } from "react";
import "./card.css";

export default function Card ({name, age})
{
    const [mem , setMem] = useState("");

    const clickHandler = (name) => {
        setMem(name);
    };

    // console.log(mem);

   return (
    <>
        <div onClick={() => clickHandler(name)} className="my-card">
            <h5>Name : {name}</h5>
            <h5>Age : {age} </h5>
            {mem && <h5> Greeting {mem}</h5>}
        </div>
    </>


    );
};

