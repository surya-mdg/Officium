import React from "react";

function LoginOption(props)
{
    return (
        <div className="login-box">
            <div className="row login-section">
                <h1 className="login-text">Officium</h1>
            </div>
            <div className="row login-section">
                <button type="button" className="btn btn-outline-secondary login-btn" onClick={() => props.option(false)}>Student</button>
            </div>
            <div className="row login-section">     
                <div style={{width: "100%", height: "20px", borderBottom: "1px solid black", textAlign: "center", marginBottom: "2vh"}}>
                    <span  className="or">or</span>
                </div>        
            </div>
            <div className="row login-section">
                <button type="button" className="btn btn-outline-secondary login-btn" onClick={() => props.option(true)}>Placement Office</button>
            </div>
        </div>
    );
}

export default LoginOption;