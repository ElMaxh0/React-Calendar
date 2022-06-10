import { useSelectedDay } from "../../hooks/SelectedDay";

function Compromissos () {
    const {SelectedDay, setSelectedDay} = useSelectedDay();
    return(
        <>
        <div>
            <h1> {SelectedDay} </h1>
            <p>{SelectedDay}</p>
        </div>
        </>
    )
}
export{
    Compromissos
}