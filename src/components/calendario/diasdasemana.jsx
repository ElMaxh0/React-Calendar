import React from "react";

export default function DiasDaSemana(){
    const DiasDaSemana = ["Domingo ","Segunda","Terca","Quarta","Quinta","Sexta","Sabado", ]
    return(
            <tr>
                {DiasDaSemana.map((dias) => <>
                <td>{dias}</td>
                </>)}
            </tr>
    )
}
