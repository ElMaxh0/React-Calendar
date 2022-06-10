import React from "react";
import { useSelectedMouth } from "../../hooks/SelectedMouth";
import CalendarData from "./conteudo";
import DiasDaSemana from "./diasdasemana";
import { CalendarUi } from "./styles";

export default function Calendario (){
    const {SelectedMouth, setSelectedMouth} = useSelectedMouth();
    const MesesName = ["Janeiro", "Fevereiro ", "Marco" , "Abril ", "Maio", "Junho" , "Julho", "Agosto", "Setembro", "Outubro" , "Novembro " , "Dezembro " ]
    return(
        <>
        <div style={{
            padding:"1%"
        }}>
            <div style={{
                width:"100%"
            }}>
                <h1>{MesesName[(SelectedMouth -1 )]}</h1>
                <CalendarUi>
                    <DiasDaSemana />
                    <CalendarData />
                </CalendarUi>
                <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                }}>
                    <div style={{
                        textAlign:"left",
                        width:"100%",
                    }}>
                        <a onClick={() => setSelectedMouth(SelectedMouth-1)} > Mes Anterior  </a>
                    </div>
                    <div style={{
                        textAlign:"right",
                        width:"100%",
                    }}>
                        <a onClick={() => setSelectedMouth(SelectedMouth+1)} > Proximo Mes  </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}