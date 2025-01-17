import React, {useState, useEffect} from "react";
import Axios from "axios";
import Job from "../Job";

function JobStats(props)
{
    const [jobs,setJobs] =useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/listJobs",{withCredentials: true}).then((res) => {
            setJobs(res.data);
        }).catch((err) => {
          console.log(err);
        });
    }, []);

    function Apply(company)
    {
        const applyDetails = {company: company, id: props.user.userId};
        Axios.post("http://localhost:3001/job", applyDetails).then((res) => {
            console.log(res.data);
        });
    }

    return(
        <div className="container">
            <div className="row">
                <h1 className="welcome-text">Job List</h1>
            </div>
            <div className="row">
                <div className="container job-box">
                    {jobs.map((job,index) => {return <Job key={index} data={job} apply={Apply} stats={true}/>})}                
                </div>
            </div>
        </div>
    );
}

export default JobStats;