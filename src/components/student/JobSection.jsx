import React, {useState, useEffect} from "react";
import Axios from "axios";
import Job from "../Job";

function JobSection(props)
{
    const [jobs,setJobs] =useState([]);

    useEffect(() => {
        Axios.post("http://localhost:3001/listJobs",{withCredentials: true,id: String(props.userId)}).then((res) => {
            setJobs(res.data);
        }).catch((err) => {
          console.log(err);
        });
      }, [props.userId]);

    function Apply(company)
    {
        Axios.post("http://localhost:3001/job", {company: company, id: String(props.userId)}).then((res) => {
            console.log(res.data);
        });
    }

    return(
        <div className="container">
            <div className="row">
                <h1 className="welcome-text">Welcome Back, {props.user.userName}</h1>
            </div>
            <div className="row">
                <div className="container job-box">
                    {jobs.map((job,index) => {return <Job key={index} data={job} apply={Apply} stats={false} userId={props.userId}/>})}                
                </div>
            </div>
        </div>
    );
}

export default JobSection;