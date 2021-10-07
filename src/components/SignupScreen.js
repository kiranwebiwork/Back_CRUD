import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// import Registration from "../Redux/action";
import axios from 'axios'


export default function SignupScreen() {
    const [userRegistration, setUserRegistration] = useState({
        id :"",
        Name:"",
        Email:"",
        Password:"",
        
    })
 const [usertestregular , setUsertestregular] = useState(false)
 const [userexits, setuserexits] = useState("")

    const handlechange =(e)=>{
        const { name, value } = e.target;
        setUserRegistration({
          ...userRegistration,
          [name]: value,
        });
      };

    const  Registration =( e ,data)=>{
        e.preventDefault()
        const  { id , Name , Email , Password } = data;
       console.log("data:", data)

        
        if (id && Name && Email && Password) {
         axios.post("http://localhost:4200/api/user/register" , data)
           .then(response => setuserexits(response.data))
        //    console.log("response" , response)
        }else{
            alert("Please Insert the data properly")
        }
     }
    return (
        <div className="" style={{ display: "flex", justifyContent: "center" }} >
            <div className="container bg-primary " style={{ height: '600px', margin: "20px" }} >
                <div className="row p-3 ">
                    <div className="col-md-6" style={{ paddingTop: "20px", marginTop: "30px", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <h3 className="text-center">Photo Or Title</h3>
                    </div>
                    <div className="col-md-6" style={{ paddingTop: "20px", marginTop: "30px", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <h3 className="" style={{ paddingLeft: "140px" }}   >Sign-up</h3>
                        <form style={{ width: "400px" }} >
                             <div className="form-group " style={{ marginTop: "15px" }} >
                                <label for="exampleInputPassword1">Id</label>
                                <input type="text" name="id"  className="form-control" value={userRegistration.id} onChange={handlechange}  id="exampleInputPassword1" placeholder="Id" />
                            </div>
                            <div className="form-group m-3" style={{ marginTop: "15px" }} >
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" name="Name"  className="form-control" value={userRegistration.Name} onChange={handlechange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                {usertestregular ? <p>Please Enter the valid username</p> : "" }
                            </div>
                            <div className="form-group " style={{ marginTop: "15px" }}>
                                <label for="exampleInputPassword1">Email</label>
                                <input type="email" name="Email"  className="form-control" value={userRegistration.Email} onChange={handlechange}  id="exampleInputPassword1" />
                            </div>
                            <div className="form-group " style={{ marginTop: "15px" }}>
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" name="Password"  className="form-control"  value={userRegistration.Password} onChange={handlechange}  id="exampleInputPassword1" />
                            </div>
                            
                            <p>{userexits}</p>

                            {/* <Link to="/login"   > */}
                                <button type="submit" onClick={(e)=>Registration(e, userRegistration)} className="btn btn-primary" style={{ marginTop: "15px" }}>Submit</button>
                            {/* </Link> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
