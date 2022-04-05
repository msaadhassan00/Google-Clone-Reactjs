import { createContext, useState } from "react";

export const googleContext = createContext();

export const ContextProvider = ({ children }) => {
    
    const [value, setValue] = useState(null)
    console.log(value)
    return (
        <googleContext.Provider value={{value, setValue}} >
            {children}
        </googleContext.Provider>
    );
};


