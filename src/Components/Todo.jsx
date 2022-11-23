import React from 'react'

export  const Todo =()=>{
    const [title,setTitle]=React.useState("")
    const [tag,setag]=React.useState("")
    const [statusdata,setstatus]=React.useState("")

    const payload={
        title:title,
        tag:tag,
        statusdata:statusdata
    }
    const handleAdd=async()=>{
        await fetch(`http://localhost:3001/todo/create`,{
                method:"POST",
                body:JSON.stringify(payload),
                headers:{
                    "Content-Type":"application/json"
                }
            
            });
            console.log("Posted Data",payload)
            alert("Your Task added");
    }
    return <>
    <div>
        <label>
          Task: 
        </label>
        <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)}/>
        <br/>
        <label>
          Tag:
        </label>
        <input type="text" value={tag} onChange={(event)=>setag(event.target.value)}/>
        <br/>
        <label>
          Status:
          </label>
          <input type="text" value={statusdata} onChange={(event)=>setstatus(event.target.value)}/>
       
        
        <hr/>
        <button onClick={()=>handleAdd()}>
          Save Task
        </button>
      </div>
    
    </>

}


