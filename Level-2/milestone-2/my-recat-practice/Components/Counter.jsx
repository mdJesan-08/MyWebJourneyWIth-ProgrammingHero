import { use } from "react";
import "./counter.css";
import { counterContext } from "../providers/counter.provider";

export default function Counter()
{
    const {val, setVal} = use(counterContext);


    return(
        <>
            <button onClick={() => setVal(val+1)}>Incremnt + </button>
            <h3>Value : {val} </h3>
            <button onClick={() => setVal(val-1)}>Decrement -</button>
        </>
    );
}