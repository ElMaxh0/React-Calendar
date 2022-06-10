import React, { createContext, useContext, useState } from "react";
export const SelectedMouthContext = createContext();
export default function SelectedMouthProvider({children}){
    const[SelectedMouth, setSelectedMouth]= useState(1);
    return <SelectedMouthContext.Provider value={{SelectedMouth,setSelectedMouth}}>{children}</SelectedMouthContext.Provider>
}
export function useSelectedMouth(){
    const context= useContext(SelectedMouthContext)
    const {SelectedMouth, setSelectedMouth} = context;
    return {SelectedMouth, setSelectedMouth}

}