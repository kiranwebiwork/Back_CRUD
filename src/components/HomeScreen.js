import axios from 'axios'
import React, { useState , useEffect } from 'react'

export default function HomeScreen() {
    const [state, setstate] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4200/api/blog")
        .then(response=> setstate(response.data) )
    }, [])
    console.log("state:", state);
    return (
        <div className="container">
        <div style={{height:"100px" ,display:"flex" ,flexDirection:'column', alignItems:"center"}}  className=" container bg-primary">
           <h4>Username</h4>
           Create Post<button onClick={()=>{prompt("enter the post")}}>+</button>
           </div>
           
            <h3>Home Screen </h3>
           
           
            {
             state.map((states , i)=>{
                    return  <div style={{backgroundColor:"coral" , display:"flex" , justifyContent:"space-between" ,}} >
                            <h2>{states.description}</h2>
                             <div>
                             <button>Edit</button>
                             <button>Delete</button>
                             </div>
                            </div> 
             })
            }
  
        </div>
    )
}
