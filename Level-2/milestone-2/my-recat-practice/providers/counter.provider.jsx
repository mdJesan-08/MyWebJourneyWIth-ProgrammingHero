import { createContext } from "react";
import { useState } from "react";
export const counterContext = createContext();

export default function CounterProvider({children})
{

    const [val, setVal] = useState(0);
    return (
        <counterContext.Provider value={{val, setVal}}>
            {children}
        </counterContext.Provider>
    );
};