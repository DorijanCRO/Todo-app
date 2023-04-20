import React, { useEffect, useState } from "react";
import { ContainerB } from "./ContainerStyle";
import Naslov from "../Naslov/Naslov";
import TodoNew from "../TodoNew/TodoNew";
import Form from "../Form/Form";
import { getTodo, postTodo, deleteTodo } from "../../services/todos";

function Container(){

    const [todo, setTodo] = useState([]);
    const [title, setTitle] = useState("");

    const newTodo = () => {
      const todos = { title: title};
      postTodo(todos).then((res) => {
      todo.push(res);
      setTodo([...todo]);
      setTitle("");
      });
      };

    useEffect(()=>{
      getTodo().then((res)=>{
          setTodo(res); 
        });
    },[]);


    const unos = (e) =>{
      e.preventDefault();
      setTitle(e.target.value) 
    };

      const remove = (id) => {
        deleteTodo(id).then((res) => {
          if (res === 200) {
            setTodo(...[todo.filter((item) => item._id !== id)]);
          }
        });
      };


    return(
        <>
        <ContainerB>
            <Naslov>Your Todo List</Naslov>
            {todo.map((item) => (
                <>
                <TodoNew key={item._id} text={item.title} remove={() => remove(item._id)} ></TodoNew>
                </>
            ))}
           <Form vrijednost={title} promjena={unos} funkcijaKlikni={newTodo} ></Form>
        </ContainerB>
        </>
    );

}


export default Container;