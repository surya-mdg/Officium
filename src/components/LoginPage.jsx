import React, {useState, useEffect} from "react";
import {Navigate} from "react-router-dom";
import Axios from "axios";

function Login(props)
{
    const [navigate,setNavigate] = useState(false);
    const [loginInfo, setInfo] = useState({email:"", password: ""});
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const [pc,setPC] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/login/success",{withCredentials: true}).then((res) => {
      setUserName(res.data.userName);
      setUserId(res.data.userId);
      setPC(res.data.pc);
      console.log("userId: "+ res.data.userId);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

    if(userId !== ""){
      console.log("User Id: "+userId);
      props.AddUser({userName: userName, userId: userId});
      console.log("lol");
      return <Navigate to="/about"/>;
    }

    if(pc)
    {
      console.log("hello");
      props.SetView(true);
      return <Navigate to="/about"/>;
    }

    if(navigate)
      return <Navigate to="/about"/>;

    function LoginInfo(event)
    {
      setInfo((prev)=>{
        return ({...prev,[event.target.name]:event.target.value});
      })
    }

    function Google()
    {
        window.open("http://localhost:3001/auth/google","_self");
    }

    function PC()
    {
      Axios.post("http://localhost:3001/loginPC",loginInfo).then((res) => {
        if(res.data.result)
        {
          props.SetView(true);
          setNavigate(res.data.result);
        }
        else if(res.data.username)
        {
          alert("Invalid Password");
        }
        else
          alert("Invalid User");
      }).catch((err) => {
        console.log(err);
      });
    }

    function ViewLogin()
    {
        return (
          <div className="login-box-2">
            <div className="row login-section" style={{marginTop: "0vh"}}>
              <div className="row d-flex justify-content-center">
              <h1 className="login-text">Login</h1>
              </div>
              <div className="row d-flex justify-content-center social-btn-div">
                <button type="button" className="btn btn-outline-secondary social-button" onClick={Google}>
                  <div className="row">
                    <div className="col-md-2" style={{margin: "1vh 0"}}>
                      <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Icon"/>
                    </div>
                    <div className="col-md-8" style={{fontSize: "1.1rem", margin: "1vh 0"}} >
                      Log In As Student
                    </div>
                  </div>
                </button>  
              </div>
            <div className="row d-flex justify-content-center">
              <h2 className="or-h2"><span className="or-span" style={{backgroundColor: "#f6fbff"}}>or</span></h2>    
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-12 form-login-section">
                <input name="email" type="text" className="form-control col-md-2 login-text-box"  placeholder="placementofficer@example.com" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={LoginInfo} value={loginInfo.email}/>
              </div>
              <div className="col-lg-12 form-login-section">
                <input name="password" type="password" className="form-control col-md-2 login-text-box"  placeholder="Password" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={LoginInfo} value={loginInfo.password}/>
              </div>
              <div className="col-md-3" style={{marginTop: "4vh", borderRadius: "50px"}}>
                <button type="submit" className="btn btn-primary btn-apply" onClick={PC} style={{borderRadius: "50px"}}>Login</button>
              </div>
            </div>
                  
          </div>     
          </div>
      );
    }

    return(
        <div className="container-fluid d-flex align-items-center justify-content-center login-container-2">
            <div className="row login-row">
                <div className="col-md-6 login-col filld">
                    <img src="/building-img-2-1.jpg" alt="" />
                    <h1 className="login-title">Officium</h1>
                    <p className="login-p">For College Placements</p>
                </div>
                <div className="col-md-6 login-col d-flex align-items-center justify-content-center" style={{backgroundColor: "#f6fbff"}}>
                    {ViewLogin()}    
                </div>
            </div>           
        </div>
    );
}

export default Login;