import React from "react";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

function Job(props)
{
    return(
        <div class="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-2">
                        <img src="https://thehackernews.com/images/-ETAiGjhm3A4/X036jrsU_tI/AAAAAAAAAto/3ItBdoxr2awAtb7fZjY--1eIAkm-Ug8YACLcBGAsYHQ/w0/cisco.jpg" className="img-fluid rounded-start job-image" alt="..."/>
                    </div>
                    <div className="col-md-9 align-middle d-flex align-items-center">
                        <h1 className="card-title" style={{marginTop: "10px",fontWeight:"700"}}>Cisco</h1>
                    </div>
                    <div className="col-md-1 align-middle d-flex align-items-center justify-content-center" style={{borderLeft:"1px solid",borderColor:"#cccccc"}}>
                        <WorkHistoryIcon fontSize="large" style={{transform: "scale(1.3)"}}/>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div className="row job-body-head">
                    <div className="col-md-2 d-flex align-items-center justify-content-center job-role">
                        <h5>👨‍🎓 Internship</h5>
                    </div>
                    <div className="col-md-2 d-flex align-items-center justify-content-center job-role">
                        <h5>⚙ Tester</h5>
                    </div>
                    <div className="col-md-2 d-flex align-items-center justify-content-center job-role">
                        <h5>⏳ 2 Months</h5>
                    </div>
                    <div className="col-md-2 d-flex align-items-center justify-content-center job-role">
                        <h5>💵 30,000/mt</h5>
                    </div>
                </div>
                <div className="row job-body-main">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <h6 className="date" style={{width:"100%"}}><span style={{fontWeight:700}}>Last Date:</span> 20th Dec 2022</h6>
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-center center-date">
                        <h6 className="date" style={{width:"100%"}}><span style={{fontWeight:700}}>Test Date:</span> 26th Dec 2022</h6>
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <h6 className="date" style={{width:"100%"}}><span style={{fontWeight:700}}>Interview Date:</span> 28th Dec 2022</h6>
                    </div>
                </div>  
                <div className="row job-body-footer d-flex align-items-center justify-content-center">
                    <div className="col-md-3">
                        <button type="button" class="btn btn-primary btn-apply">Apply</button>
                    </div>
                </div>             
            </div>
        </div>
    );
}

export default Job;