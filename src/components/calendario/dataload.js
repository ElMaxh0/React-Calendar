import React from "react";
export function CalendarMader(mes, year){
    function diasNoMes(mes, ano) {
        var data = new Date(ano, mes, 0);
        return data.getDate();
    }
    var data = new Date()
    data.setYear(year);
    data.setMonth((mes -1));
    data.setDate(1);
    var startMouth = data.getDay()-1
    var calendarJson = [[],[],[],[],[],[],[],[]]
    for (let i=0; i<= startMouth; i++)  {
        calendarJson[0].push("");
    }
    let comanderCode =1;
    let comanderRow = 0;
    for (var c = 1 ; c <= (diasNoMes(mes, year )) ; c++){
        if((calendarJson[comanderRow].length) == 7){
            comanderRow++
            c = c -1
            
        }
        else{
            calendarJson[comanderRow].push(comanderCode)
            comanderCode++
        }
    }
    console.log(calendarJson)
    return calendarJson
}