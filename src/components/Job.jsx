import React from "react";
import JobLabel from "./JobLabel";
import JobDate from "./JobDate";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LockIcon from '@mui/icons-material/Lock';

function Job(props)
{
    const date = new Date();

    function CheckDate(sentDate)
    {
        let givenDate = new Date(sentDate);

        let day = givenDate.getDate();
        let nth = 'th';

        if(!(day > 3 && day < 21)) 
        {
            switch (day % 10) {
                case 1:  nth = "st"; break;
                case 2:  nth = "nd"; break;
                case 3:  nth = "rd"; break;
                default: nth = "th";
              }
        }

        return (String(givenDate.getDate()).padStart(1, '0') + nth + " " + givenDate.toLocaleString('default', { month: 'long' }).substring(0,3) + " " + String(givenDate.getFullYear()));
    }

    function Status(status)
    {
        if((date.getTime() - new Date(props.data.lastDate).getTime()) > 0)
            return <LockIcon fontSize="large" style={{transform: "scale(1.3)"}}/>;
        else if(status==="applied")
            return <CheckBoxIcon fontSize="large" style={{transform: "scale(1.3)"}}/>;
        else
            return <WorkHistoryIcon fontSize="large" style={{transform: "scale(1.3)"}}/>;
    }

    function Footer()
    {
        if(props.stats)
            return (
            <div className="col-md-3">
                <h6 className="stats" style={{width:"100%"}}><span style={{fontWeight:700}}>Students Applied: </span>{props.total}</h6>
            </div>
            );
        else
        return (
            <div className="col-md-3">
                <button type="button" className="btn btn-primary btn-apply" onClick={() => props.apply(props.data.name)}>Apply</button>
            </div>
            );
    }

    return(
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-2">
                        <img src={props.data.logoUrl} className="img-fluid rounded-start job-image" alt="..."/>
                    </div>
                    <div className="col-md-9 align-middle d-flex align-items-center">
                        <h1 className="card-title" style={{marginTop: "10px",fontWeight:"700"}}>{props.data.name}</h1>
                    </div>
                    <div className="col-md-1 align-middle d-flex align-items-center justify-content-center" style={{borderLeft:"1px solid",borderColor:"#cccccc"}}>
                        {Status(props.data.status)}
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row job-body-head">
                    <JobLabel name={props.data.type} type="type"/>
                    <JobLabel name={props.data.role} type="role"/>
                    <JobLabel name={props.data.duration} type="time"/>
                    <JobLabel name={props.data.salary} type="salary"/>
                </div>
                <div className="row job-body-main">
                    <JobDate type="Last Date: " date={CheckDate(props.data.lastDate)}/>
                    <JobDate type="Test Date: " date={CheckDate(props.data.testDate)}/>
                    <JobDate type="Interview Date: " date={CheckDate(props.data.interviewDate)}/>
                </div>  
                <div className="row job-body-footer d-flex align-items-center justify-content-center">
                    {Footer()}
                </div>             
            </div>
        </div>
    );
}

export default Job;