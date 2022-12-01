import React, {useState, useEffect} from "react";
import {Navigate} from "react-router-dom";
import Axios from "axios";
import LoginOption from "./LoginOption";

function Login(props)
{
    const [option,setOption] = useState(true);
    const [student,setStudent] = useState(false);
    const [navigate,setNavigate] = useState(false);

    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/login/success",{withCredentials: true}).then((res) => {
      setUserName(res.data.userName);
      setUserId(res.data.userId);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

    function SetOption(op)
    {
      setOption(false);
      setStudent(op);
      props.SetView(op);
    }

    if(userId !== ""){
      props.AddUser({userName: userName, userId: userId});
      return <Navigate to="/about"/>;
    }

    function Google()
    {
        window.open("http://localhost:3001/auth/google","_self");
    }

    function PC()
    {
      setNavigate(true);
    }

    if(navigate)
      return <Navigate to="/about"/>;

    function ViewLogin()
    {
        if(student)
            return (
                <div className="login-box">
                    <div className="row login-section">
                        <h1 className="login-text">Login As A Student</h1>
                    </div>
                    <div className="row login-section" style={{marginTop: "8vh"}}>
                        <button type="button" className="btn btn-outline-secondary social-button">
                        <div className="row">
                            <div className="col-md-2" style={{margin: "1vh 0"}}>
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Icon"/>
                            </div>
                            <div className="col-md-8" style={{fontSize: "1.3rem", margin: "1vh 0"}} onClick={Google}>
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
              <div className="row login-section" style={{marginTop: "8vh"}}>
                  <button type="button" className="btn btn-outline-secondary social-button">
                  <div className="row">
                      <div className="col-md-2" style={{margin: "1vh 0"}}>
                      <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Icon"/>
                      </div>
                      <div className="col-md-8" style={{fontSize: "1.3rem", margin: "1vh 0"}} onClick={PC}>
                          Go To PC Site
                      </div>
                      </div>
                  </button>
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