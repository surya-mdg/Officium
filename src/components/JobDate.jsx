import React from "react";

function JobDate(props)
{
    function Styling()
    {
        if(props.type==="Test Date: ")
            return "col-md-4 d-flex align-items-center justify-content-center center-date";
        else
            return "col-md-4 d-flex align-items-center justify-content-center";
    }

    return(
        <div className={Styling()}>
            <h6 className="date" style={{width:"100%"}}><span style={{fontWeight:700}}>{props.type}</span>{props.date}</h6>
        </div>
    );
}

export default JobDate;