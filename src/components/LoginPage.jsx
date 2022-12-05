import React, {useState, useEffect} from "react";
import {Navigate} from "react-router-dom";
import Axios from "axios";
import LoginOption from "./LoginOption";

function Login(props)
{
    const [option,setOption] = useState(true);
    const [student,setStudent] = useState(false);
    const [navigate,setNavigate] = useState(false);
    const [loginInfo, setInfo] = useState({email:"", password: ""});

    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/login/success",{withCredentials: true}).then((res) => {
      setUserName(res.data.userName);
      setUserId(res.data.userId);
      console.log("userId: "+ res.data.userId);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

    function SetOption(op)
    {
      setOption(false);
      setStudent(!op);
      props.SetView(op);
    }

    if(userId !== ""){
      console.log("User Id: "+userId);
      props.AddUser({userName: userName, userId: userId});
      return <Navigate to="/about"/>;
    }

    function Google()
    {
        window.open("http://localhost:3001/auth/google","_self");
    }

    function PC()
    {
      Axios.post("http://localhost:3001/loginPC",loginInfo).then((res) => {
        setNavigate(res.data.result);
      }).catch((err) => {
        console.log(err);
      });
    }

    if(navigate)
      return <Navigate to="/about"/>;

    function LoginInfo(event)
    {
      setInfo((prev)=>{
        return ({...prev,[event.target.name]:event.target.value});
      })
    }

    function ViewLogin()
    {
        if(student)
            return (
                <div className="login-box">
                    <div className="row login-section">
                        <h1 className="login-text">Login As A Student</h1>
                    </div>
                    <div className="row login-section" style={{marginTop: "8vh"}}>
                        <button type="button" className="btn btn-outline-secondary social-button" onClick={Google}>
                          <div className="row">
                            <div className="col-md-2" style={{margin: "1vh 0"}}>
                              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Icon"/>
                            </div>
                            <div className="col-md-8" style={{fontSize: "1.3rem", margin: "1vh 0"}} >
                                Sign in with Google
                            </div>
                          </div>
                        </button>
                    </div>
                </div>
            );
        else
        return (
          <div className="login-box">
              <div className="row login-section">
                  <h1 className="login-text">Login As A PC</h1>
              </div>
              <div className="row login-section" style={{marginTop: "0vh"}}>
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 form-login-section">
                      <input name="email" type="text" className="form-control col-md-2"  placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={LoginInfo} value={loginInfo.email}/>
                    </div>
                    <div className="col-lg-12 form-login-section">
                      <input name="password" type="text" className="form-control col-md-2"  placeholder="Password" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={LoginInfo} value={loginInfo.password}/>
                    </div>
                    <div className="col-md-3" style={{marginTop: "4vh"}}>
                      <button type="submit" className="btn btn-primary btn-apply" onClick={PC}>Login</button>
                    </div>
                  </div>
              </div>
          </div>
      );
    }

    return(
        <div className="container-fluid d-flex align-items-center justify-content-center login-container">
            {(option) ? <LoginOption option={SetOption}/> : ViewLogin()}        
        </div>
    );
}

export default Login;