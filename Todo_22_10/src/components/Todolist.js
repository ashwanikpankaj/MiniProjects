
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
             }}><button><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Cbo5-gAI5lU8pK42PXZ7sDhPfqM7lMRCjg&usqp=CAU" style={{width:"20px"}} alt=""/></button></div>
             </div>  
             </p> 
     ))
    ) 
     
    
}

export{Todolist}