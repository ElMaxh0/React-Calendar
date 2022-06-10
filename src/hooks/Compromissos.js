import React, { createContext, useContext, useState } from "react";
export const CompromissosContext = createContext();
export default function CompromissosProvider({children}){
    const[Compromissos, setCompromissos]= useState("https://imersive.space/storage/imguploadedfilesapp/99/aiSi3KoSYg3SppOPqjeLodiGu6PCZll79PbDJlt8f.png");
    return <CompromissosContext.Provider value={{Compromissos,setCompromissos}}>{children}</CompromissosContext.Provider>
}
export function useCompromissos(){
    const context= useContext(CompromissosContext)
    const {Compromissos, setCompromissos} = context;
    return {Compromissos, setCompromissos}

}