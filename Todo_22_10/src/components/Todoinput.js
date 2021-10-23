import { nanoid } from 'nanoid';

import {useState} from 'react';

import "./todo.css"

function Todoinput({addData}){

    const [text, setText] = useState("")

    const handleChange = (e)=>{
        setText(e.target.value);
        
    }

    const handleClick = ()=>{
        const data = {
            title:text,
            status:false,
            id:nanoid(4)
        }

      addData(data)
         setText("")
    }
    return (<div id="input-div">
        <div id="plus-div">
         <button onClick= {handleClick} id="plus-button">+</button>
         </div>
         <div id="input-div-entry">
        <input type="text"
        value={text}
        placeholder ="Add a to--do"
        onChange = {handleChange}
        id="input-task"
      />
  </div>
    </div>)
}

export {Todoinput}