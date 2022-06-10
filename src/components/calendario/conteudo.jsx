import React from "react";
import { useSelectedMouth } from "../../hooks/SelectedMouth";
import { CalendarMader } from "./dataload";

export default function CalendarData(){
    const {SelectedMouth, setSelectedMouth} = useSelectedMouth();

    var infodays =CalendarMader(SelectedMouth, 2022)
    return(
        <>
            {infodays.map((week)=><>
            <tr>
                {week.map((daysweek) => <>
                <td>
                    {daysweek}
                </td>
                </>)}
            </tr>
            </>)}
        </>
    )
}