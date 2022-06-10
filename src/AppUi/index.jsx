import React from "react";
import Calendario from "../components/calendario";
import { Compromissos } from "../components/listaCompromissos/compromissos";
import GeneralContainer from "./styles"

const DashBoardUi = () =>{
    return(
        <>
        <div>
            <GeneralContainer  >
                <div style={{
                    display:"flex",
                    alignContent:"center",
                    alignItems:"center",
                    justifyContent:"center",
                    width:"100%",
                    height:"100%"
                }}>
                    <div id="CalendarSpace" alt ={"CalendarSpace"} style={{
                        backgroundColor:"rgba(235,235,235)",
                        borderRadius:"25px",
                        padding:"1%",
                        width:"80vh",
                    }} >
                        <Calendario />
                    </div>
                    <div style={{
                    background:"rgba(49,72,65)",
                    color:"rgba(49, 145 , 131)",
                    padding:"3%",
                    marginLeft:"1%",
                    aspectRatio:"1/1",
                    width:"30VH",
                    borderRadius:"25px"

                    }}>
                        <div>
                            <Compromissos />
                        </div>
                    </div>
                </div>

            </GeneralContainer>
        </div>
        </>
    )
}

export default DashBoardUi