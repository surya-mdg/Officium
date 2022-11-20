import React from "react";
import Job from "./Job";

function JobSection()
{
    return(
        <div className="container">
            <div className="row">
                <h1 className="welcome-text">Welcome Back, Surya</h1>
            </div>
            <div className="row">
                <div className="container job-box">
                    <Job/>
                </div>
            </div>
        </div>
    );
}

export default JobSection;