import React, {useState,useEffect} from "react";
import Axios from "axios";
import JobLabel from "./JobLabel";
import JobDate from "./JobDate";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LockIcon from '@mui/icons-material/Lock';
import DeleteIcon from '@mui/icons-material/Delete';
import ArticleIcon from '@mui/icons-material/Article';
import xlsx from "json-as-xlsx";

function Job(props)
{
    const date = new Date();
    const [branches, setBranch] = useState([]);
    const [applied, setApply] = useState(false);
    const [lock, setLock] = useState(false);
    const [totalStudents, setTotalStudents] = useState(0);
    const [del,setDelete] = useState(false);

    let settings = {
        fileName: props.data.name, // Name of the resulting spreadsheet
        extraLength: 3, // A bigger number means that columns will be wider
        writeMode: "writeFile", // The available parameters are 'WriteFile' and 'write'. This setting is optional. Useful in such cases https://docs.sheetjs.com/docs/solutions/output#example-remote-file
        writeOptions: {}, // Style options from https://docs.sheetjs.com/docs/api/write-options
        RTL: false, // Display the columns from right-to-left (the default value is false)
    }

    useEffect(() => {
        Axios.post("http://localhost:3001/stats",{name: props.data.name, branches: branches}).then((res) => {
          setTotalStudents(res.data.total);
        }).catch((err) => {
          console.log(err);
        });

        if(!props.stats)
        {
            Axios.post("http://localhost:3001/checkStatus",{name: props.data.name, id: String(props.userId)}).then((res) => {
                setApply(res.data.status);
                setLock(res.data.lock);
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            });
        }
      }, [props.data.name, branches, props.userId, props.stats]);
    
    function GetStudentList()
    {
        Axios.post("http://localhost:3001/getList",{name: props.data.name}).then((res) => {

              xlsx([
                {
                  sheet: "Company",
                  columns: [
                    { label: "Name", value: "name" }, // Top level data
                    { label: "Mobile Number", value: "phoneNo"}, // Custom format
                    { label: "Personal Email", value: "personalEmail"},
                    { label: "College Email", value: "collegeEmail"},
                    { label: "Course", value: "course"},
                    { label: "Degree", value: "degree"},
                    { label: "USN", value: "usn"},
                    { label: "Gender", value: "gender"},
                    { label: "College CGPA", value: "uniCGPA"},
                    { label: "12th CGPA", value: "gradeCGPA"},
                    { label: "Backlogs", value: "backlogs"},
                    { label: "Resume", value: "resume"}, // Run functions
                  ],
                  content: res.data,
                }
              ], settings);
        }).catch((err) => {
            console.log(err);
        });
    }

    function Delete()
    {
        if(del){
            Axios.post("http://localhost:3001/delete",{name: props.data.name}).then((res) => {
                console.log(props.data.name+" Deleted");
            }).catch((err) => {
                console.log(err);
            });
        }
        else
            setDelete(true);
    }

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
        if(props.stats)
            return <button type="button" className="btn btn-success job-btn" style={{width:"100%", padding: "2vh 0"}} onClick={() => GetStudentList()}><ArticleIcon fontSize="large"/></button>;

        if(applied)
            return <CheckBoxIcon fontSize="large" style={{transform: "scale(1.3)"}}/>;
        else if((date.getTime() - new Date(props.data.lastDate).getTime()) > 0 || lock)
            return <LockIcon fontSize="large" style={{transform: "scale(1.3)"}}/>;
        else
            return <WorkHistoryIcon fontSize="large" style={{transform: "scale(1.3)"}}/>;
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

    function ButtonDisplay()
    {
        if(applied)
        {
            return <DoneOutlineIcon fontSize="small"/>;
        }
        if((date.getTime() - new Date(props.data.lastDate).getTime()) > 0 || lock)
        {
            return <LockIcon fontSize="small"/>;
        }
        else{
            return "Apply";
        }
    }

    function OnApply()
    {
        if((date.getTime() - new Date(props.data.lastDate).getTime()) <= 0 && !applied && !lock)
        {
            props.apply(props.data.name);
            setApply(true);
        }
    }

    function Footer()
    {
        if(props.stats)
            return (
                <div className="row">
                    <div className="col-md-4">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle job-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:"100%"}}>Filter Branch</button>
                            <ul className="dropdown-menu">
                                <li><input className="form-check-input" type="checkbox" value="CSE" id="flexCheckDefault" onChange={SetBranch}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Computer Science Engineering</label></li>
                                <li><input className="form-check-input" type="checkbox" value="ISE" id="flexCheckDefault" onChange={SetBranch}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Information Science Engineering</label></li>
                                <li><input className="form-check-input" type="checkbox" value="ECE" id="flexCheckDefault" onChange={SetBranch}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Electronics & Communication Engineering</label></li>
                                <li><input className="form-check-input" type="checkbox" value="EEE" id="flexCheckDefault" onChange={SetBranch}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Electrical & Electronics Engineering</label></li>
                                <li><input className="form-check-input" type="checkbox" value="ME" id="flexCheckDefault" onChange={SetBranch}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Mechanical Engineering</label></li>
                                <li><input className="form-check-input" type="checkbox" value="CV" id="flexCheckDefault" onChange={SetBranch}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Civil Engineering</label></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h6 className="stats" style={{width:"100%"}}><span style={{fontWeight:700}}>Students Applied: </span>{totalStudents}</h6>
                    </div>
                    <div className="col-md-4 dropdown">
                        <button type="button" className="btn btn-danger job-btn" style={{width:"100%"}} onClick={() => Delete()}>{(del) ? "Confirm" : <DeleteIcon fontSize="small"/>}</button>
                    </div>
                </div>
            );
        else
        return (
            <div className="col-md-3">
                <button type="button" className="btn btn-primary btn-apply" onClick={OnApply}>{ButtonDisplay()}</button>
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
                    <JobLabel name={props.data.jobType} type="type"/>
                    <JobLabel name={props.data.jobRole} type="role"/>
                    <JobLabel name={props.data.duration} type="time"/>
                    <JobLabel name={props.data.salary} type="salary"/>
                </div>
                <div className="row job-body-main">
                    <JobDate type="Last Date: " date={CheckDate(props.data.lastDate)}/>
                    <JobDate type="Test Date: " date={CheckDate(props.data.testDate)}/>
                    <JobDate type="Interview Date: " date={CheckDate(props.data.interviewDate)}/>
                </div>  
                <div className="row job-body-footer align-items-center justify-content-center">
                    {Footer()}
                </div>             
            </div>
        </div>
    );
}

export default Job;