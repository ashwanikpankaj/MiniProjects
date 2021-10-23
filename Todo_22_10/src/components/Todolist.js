
function Todolist({list , deleter,statusChange}){

    
    return  (
     list.map((todo)=>(
         <p key={todo.id} >  
         <div className="task-div" style={todo.status?{backgroundColor:"rgba(243, 144, 144, 0.239)",textDecoration:"line-through"}:{backgroundColor:"white",textDecoration:"none"}}>        
            <div><input type="checkbox" className="checkbox" onChange={()=>{
                statusChange(todo.id)
            }} /> </div>      
             <div className="text"> {todo.title}</div>
             <div className="delete" onClick={()=>{
                 deleter(todo.id)
             }}><button>Delete</button></div>
             </div>  
             </p> 
     ))
    ) 
     
    
}

export{Todolist}