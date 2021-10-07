import React  , { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory} from 'react-router-dom' 
export default function LoginScreen() {
     const [login, setlogin] = useState({ 
        Email:"",
        Password:"",
     });
     const history = useHistory();
     const [userexits, setuserexits] = useState(false)

    const handleinput=(e)=>{
      const  {name , value} = e.target
            setlogin({
                ...login ,
                [name] : value ,
            })
        // console.log("user login and password:", login)
    }


    const loginuser = ( e ,logindata)=>{
        e.preventDefault();
        const  {  Email , Password } = logindata;
        if (Email && Password) {
            axios.post("http://localhost:4200/api/user/login" , logindata)
            .then(response =>{
                // setuserexits(response.data.response)
                if (response.data.response) {
                    history.push("/home")  
                               
                }else{
                    history.push("/login");
                    setuserexits(true)  
                }
            
            });  
            
        }else{
                if (Email == "" ) {
                    alert("Please enter Email ")
                } else {
                    alert("Please enter Password ")
                }
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
                    <h3 className="" style={{ paddingLeft: "140px" }}   >Login </h3>
                    <form style={{ width: "400px", paddingTop:"30px" }} >
                        <div className="form-group " style={{ marginTop: "25px" }}>
                            <label for="exampleInputPassword1">Email</label>
                        <input type="email" name="Email" value={login.Email}  onChange={handleinput} className="form-control"  placeholder="Email" />
                        </div>
                           <div className="form-group " style={{ marginTop: "25px" }}>
                            <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="Password" value={login.Password}  onChange={handleinput} className="form-control"  placeholder="Password" />
                        </div>
   
                        
                        <p>{userexits ?  "Wrong Email and Password " : ""}</p>

                        <div className="d-flex d-flex justify-content-around">
                        {/* <Link to="/home"  > */}
                            <button type="submit" onClick={(e)=>{loginuser(e, login)}}  className="btn btn-primary" style={{ marginTop: "15px" }}>Log-in</button>
                        {/* </Link> */}
                        {/* <Link to="/" className="text-white"  style={{marginLeft:"20px"}} > */}
                        <button  className="btn btn-secondary" style={{ marginTop: "15px" }} onClick={()=>history.push("/")} >Sign-up</button>
                        {/* </Link> */}
                        {/* <Link to="/forgotpass" className="text-white"  style={{marginLeft:"20px"}} > */}
                        <button  className="btn btn-secondary" style={{ marginTop: "15px" }}>Forgot password</button>
                        {/* </Link> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}
