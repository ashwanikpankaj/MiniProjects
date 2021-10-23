
import{useState} from 'react';

import { Todoinput } from './Todoinput';

import {Todolist} from "./Todolist"

import "./todo.css"

function Todo(){

    const [todos,setTodos] = useState([]);

    const [showFiltered,setShowfiltered] = useState(false)

    const addData = (data) =>{
      
        setTodos([...todos,data])
    }
    
    const deleter = (id)=>{
        const updatedList = todos.filter(todo=>todo.id !== id)

        setTodos(updatedList)
    }

  const statusChange =(id)=>{
      
     const updatedList = todos.map((todo)=>{
         if(todo.id===id){
              todo.status = !todo.status;   
               console.log(todo)
         }
         return todo
     })

     setTodos(updatedList)
  }
 

    return (
        <div id="container">
            <Todoinput addData={addData}></Todoinput>
            <Todolist list={showFiltered?todos.filter(todo=>todo.status):todos} deleter={deleter} statusChange={statusChange} ></Todolist>
            { <button id="show-completed-button" onClick={()=>{
                setShowfiltered(!showFiltered)
            }}>{showFiltered?"Show All" :"Show  Completed"}</button> }
         
           
        </div>
    )
}

export {Todo}