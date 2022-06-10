import React, { createContext, useContext, useState } from "react";
export const SelectedDayContext = createContext();
export default function SelectedDayProvider({children}){
    const[SelectedDay, setSelectedDay]= useState(31);
    return <SelectedDayContext.Provider value={{SelectedDay,setSelectedDay}}>{children}</SelectedDayContext.Provider>
}
export function useSelectedDay(){
    const context= useContext(SelectedDayContext)
    const {SelectedDay, setSelectedDay} = context;
    return {SelectedDay, setSelectedDay}

}