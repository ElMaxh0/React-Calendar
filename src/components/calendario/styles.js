import styledComponents from "styled-components";

const CalendarUi = styledComponents.table `
width: 100%;
border-collapse: collapse;
border: 1px solid black;
text-align: center;
table-layout: fixed;
aspect-ratio: 1 / 1;
& tr ,td {
    border: 1px solid;
  }
  & td{
     
  }
`
export{
    CalendarUi
}