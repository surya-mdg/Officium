import React, {useState, useEffect} from "react";
import LoginOption from "./LoginOption";

function Login()
{
    const [option,setOption] = useState(true);
    const [student,setStudent] = useState(false);

    const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3001/login/success", {
        mode:"no-cors",
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200){console.log("Hello");}
        })
        .then((resObject) => {
          setUser(resObject.user.displayName);
          console.log(resObject.user.displayName);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

    function SetOption(op)
    {
        setOption(false);
        setStudent(op);
    }

    function Google()
    {
        window.open("http://localhost:3001/auth/google","_self");
    }

    function ViewLogin()
    {
        if(student)
            return (
                <div className="login-box">
                    <div className="row login-section">
                        <h1 className="login-text">Login As A {user}</h1>
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
    }

    return(
        <div className="container-fluid d-flex align-items-center justify-content-center login-container">
            {(option) ? <LoginOption option={SetOption}/> : ViewLogin()}        
        </div>
    );
}

export default Login;