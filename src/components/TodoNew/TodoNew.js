import React from "react";
import { Text ,TodoNewB } from "./TodoNewStyle";
import Button from "../Button/Button";


function TodoNew(props){
    


    return(
        <>
        <TodoNewB>
         <Text>{props.text}</Text>
        <Button remove={() => props.remove()} ></Button>
         </TodoNewB>
        </>
    );
}

export default TodoNew;