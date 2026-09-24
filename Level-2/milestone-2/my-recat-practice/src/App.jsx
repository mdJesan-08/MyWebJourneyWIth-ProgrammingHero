import { useState } from "react";
import Card from "../Components/Card";
import Counter from "../Components/Counter";
import CounterProvider from "../providers/counter.provider";


export default function App()
{
     return (

        <CounterProvider>
            <Counter/>
        </CounterProvider>

    
    );

};
