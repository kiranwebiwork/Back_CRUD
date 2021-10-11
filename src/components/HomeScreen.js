import axios from 'axios'
import React, { useState , useEffect } from 'react'

export default function HomeScreen() {
    const [state, setstate] = useState([])
    const [postdatas , setPostdatas] = useState({
        id:"",
        description:"",
    })
    useEffect(() => {
              axios.get("http://localhost:4200/api/blog" ,{
                  headers:{
                      Authorization : `Bearer ${localStorage.getItem("usertoken")}`
                  }
              })
            .then(response=> setstate(response.data))
            // if (404 ==respose.statuse) {
            //     history.push("/login")
            // }else{
            //     history.push("/home")
            // }

            // .then(response=> console.log("respossee from login blog  :" , response))
    }, [])


    // .then(response=> {
    //     console.log("respossee from login blog  :" , response)
    // })
    console.log("state:", state);
    const [ Id , setIdvalue ] = useState("")
    const addblog=(postdata)=>{
        console.log("postdata:" , postdata )
        axios.post("http://localhost:4200/api/blog", postdata)
        .then(response=> {
            console.log("response", response) 
        });
    }

    const getpostbyid=(Id)=>{
        // console.log("id:" , Id )
        // axios.post(`http://localhost:4200/api/blog/:${Id}`)
        // .then(response=> {
        //     console.log("response", response) 
        // });
    }
    const handletext = (e)=>{
        const  {name , value} = e.target
        console.log( "blog post :",e.target.value)
        setPostdatas({
            ...postdatas,
            [name] : value
        })
    }
    return (
        <div className="container">
        <div style={{height:"100px" ,display:"flex" ,flexDirection:'column', alignItems:"center"}}  className=" container bg-primary">
           <h4>Username</h4>
           Create Password
           </div>
           <div>
                <input type="textarea" name="id" value={postdatas.id} onChange={handletext}     />
               <br /><input type="textarea" name="description" value={postdatas.description} onChange={handletext}     />
           </div>
           <div>
                <input  type="text" value={Id} onChange={(e)=>setIdvalue(e.target.value)}/>
                <button onClick={getpostbyid(Id)} >PostById</button>
            </div>
           <button onClick={()=>addblog(postdatas)}>Add</button>
           
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

