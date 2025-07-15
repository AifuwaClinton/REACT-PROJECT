import { createContext } from "react";
import React from "react";

export const Usercontext = createContext()

export const UserProvider  = ({children})=>{
    const Name = "Peter"
    return(
        <Usercontext.Provider value={Name}>
            {children}
            </Usercontext.Provider>
    )
 }