import React, {useState} from "react";
import Axios from "axios";
import FormInput from "../FormInput";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

function JobInsert(props)
{
    const [branches, setBranch] = useState([]);
    const [added, setAdded] = useState(false);

    function FormSubmit(event)
    {
         event.preventDefault();

        const target = event.target;
        const jobDetails = {name: target.companyName.value, jobType: target.jobType.value, lastDate: target.lastDate.value, testDate: target.testDate.value,
                                interviewDate: target.interviewDate.value, jobRole: target.jobRole.value, duration: target.duration.value, salary: target.salary.value,
                                 logoUrl: target.logoUrl.value, minCgpa: target.minCgpa.value, maxBacklogs: target.maxActiveBacklogs.value, validBranches: branches};
        
        Axios.post("http://localhost:3001/addJob", jobDetails).then((res) => {
            console.log("New Job Added");
        });
    }

    function SetBranch(event)
    {
        const { value, checked } = event.target;

        if(checked)
        {
            setBranch((prev) => {
                return ([...prev,event.target.value]);
            });
        }
        else
        {
            setBranch(branches.filter((b) => b!==value))
        }
    }

    return(
        <div className="container">
            <div className="row">
                <h1 className="welcome-text">Add a Job</h1>
            </div>
            <div className="row">
                <div className="container form-box">
                    <form onSubmit={(event) => FormSubmit(event)} className="create-note text-left">
                        <div className="row g-0">
                            <FormInput name="Company Name" type="text" tag="companyName" fill={false}/>
                            <div className="col-lg-6 form-section">
                                <label htmlFor="exampleInputEmail1" className="form-label col-md-12">Job Type</label>
                                <select className="form-select col-md-6  form-style" aria-label="Default select example" name="jobType">
                                    <option defaultValue>Select Type</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Full Time">Full Time</option>
                                </select>
                            </div>

                            <FormInput name="Last Date" type="date" tag="lastDate" fill={false}/>
                            <FormInput name="Job Role" type="text" tag="jobRole" fill={false}/>
                            <FormInput name="Test Date" type="date" tag="testDate" fill={false}/>
                            <FormInput name="Duration" type="text" tag="duration" fill={false}/>
                            <FormInput name="Interview Date" type="date" tag="interviewDate" fill={false}/>
                            <FormInput name="Salary" type="text" tag="salary" fill={false}/>
                            <FormInput name="Logo URL" type="text" tag="logoUrl" fill={false}/>
                            <FormInput name="Minimum CGPA" type="text" tag="minCgpa" fill={false}/>
                            <FormInput name="Maximum Active Backlogs" tag="maxActiveBacklogs" type="number" fill={false}/>

                            <div className="col-lg-6 form-section">
                                <label htmlFor="exampleInputEmail1" className="form-label col-md-12">Branch</label>
                                <div className="form-check  form-style">
                                    <input className="form-check-input" type="checkbox" value="CSE" id="flexCheckDefault" onChange={SetBranch}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Computer Science Engineering</label>
                                </div>
                                <div className="form-check  form-style">
                                    <input className="form-check-input" type="checkbox" value="ISE" id="flexCheckDefault" onChange={SetBranch}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Information Science Engineering</label>
                                </div>
                                <div className="form-check  form-style">
                                    <input className="form-check-input" type="checkbox" value="EEE" id="flexCheckDefault" onChange={SetBranch}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Electrical & Electronics Engineering</label>
                                </div>
                                <div className="form-check  form-style">
                                    <input className="form-check-input" type="checkbox" value="ECE" id="flexCheckDefault" onChange={SetBranch}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Electronics & Communication Engineering</label>
                                </div>
                                <div className="form-check  form-style">
                                    <input className="form-check-input" type="checkbox" value="ME" id="flexCheckDefault" onChange={SetBranch}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Mechanical Engineering</label>
                                </div>
                                <div className="form-check  form-style">
                                    <input className="form-check-input" type="checkbox" value="CE" id="flexCheckDefault" onChange={SetBranch}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Civil Engineering</label>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 d-flex justify-content-center" style={{margin: "2vh 1vw", padding: "0.5vh 1vw"}}>
                            <div className="col-md-1">
                                <button type="submit" onClick={() => {props.changePage(true); setAdded(true);}} className="btn btn-primary btn-apply">{(added) ? <DoneOutlineIcon fontSize="small"/> : "Add"}</button>
                            </div>
                        </div>
                    </form>              
                </div>
            </div>
        </div>    
    );
}

export default JobInsert;