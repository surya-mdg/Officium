import React from "react";
import Job from "./Job";

function JobSection()
{
    const jobs = [{name:"Cisco",type:"Internship",role:"Tester",duration:"2 Months",salary: "30,000/mt",lastDate:"12/20/2022",testDate:"12/26/2022",interviewDate:"12/28/2022",logoUrl:"https://thehackernews.com/images/-ETAiGjhm3A4/X036jrsU_tI/AAAAAAAAAto/3ItBdoxr2awAtb7fZjY--1eIAkm-Ug8YACLcBGAsYHQ/w0/cisco.jpg",status: "notApplied"},
                {name:"Twitter",type:"Full Time",role:"Developer",duration:"2 Months",salary: "60,000/mt",lastDate:"11/18/2022",testDate:"11/21/2022",interviewDate:"11/28/2022",logoUrl:"https://globalventuring.com//content/uploads/2022/10/Twitter-horizontal.jpeg",status: "notApplied"},
                {name:"Twilio",type:"Internship",role:"Data Analyst",duration:"3 Months",salary: "50,000/mt",lastDate:"12/22/2022",testDate:"12/29/2022",interviewDate:"1/3/2023",logoUrl:"https://techcrunch.com/wp-content/uploads/2016/01/twilio-logo.png?w=730&crop=1",status: "applied"}];

    return(
        <div className="container">
            <div className="row">
                <h1 className="welcome-text">Welcome Back, Surya</h1>
            </div>
            <div className="row">
                <div className="container job-box">
                    {jobs.map((job,index) => {return <Job key={index} data={job}/>})}                
                </div>
            </div>
        </div>
    );
}

export default JobSection;