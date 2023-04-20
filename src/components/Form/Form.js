import React from "react";
import { Input ,FormB } from "./FormStyle";
import { ButtonB } from "../Button/ButtonStyle";



function Form(props){



    return(

         <>
        <FormB><Input type="text" value={props.vrjednost} onChange={props.promjena}  ></Input></FormB>
         <ButtonB left="left" color="#ff7d00" onClick={props.funkcijaKlikni} > Add new todo</ButtonB>
     </>
    );
}

export default Form;