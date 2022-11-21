import React from "react";

function JobLabel(props)
{
    let emoji;

    function Emoji()
    {
        switch(props.type)
        {
            case "type":
                if(props.name==="Internship")
                    emoji="👨‍🎓";
                else
                    emoji="👨‍💼";
                break;
            case "role":
                emoji="⚙";
                break;
            case "time":
                emoji="⏳";
                break;
            default:
                emoji="💵";
        }
        return (<h5>{emoji} {props.name}</h5>);
    }

    return(
        <div className="col-md-2 d-flex align-items-center justify-content-center job-role">
            {Emoji()}
        </div>  
    );
}

export default JobLabel;