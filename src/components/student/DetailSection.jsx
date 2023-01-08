import React, {useState, useEffect} from "react";
import Axios from "axios";
import FormInput from "../FormInput";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

//Contains form inputs as name, phoneNo, personalEmail, collegeEmail, degree, course, uniCGPA, gradeCGPA, gender, usn, backlogs, resume.

function DetailSection(props)
{
    const [saved,setSaved] = useState(false);

    const [studentDetails,setDetails] = useState({id: props.userId, name: "", phoneNo: "", personalEmail: "", collegeEmail: "",
        degree: "", course: "", uniCGPA: "", gradeCGPA: "",
         usn: "", gender: "", backlogs: "", resume: ""});

    useEffect(() => {
        if(typeof props.userId !== 'undefined')
        {
        Axios.post("http://localhost:3001/getDetails",{id:String(props.userId)}).then((res) => {
          setDetails(res.data);
          console.log(props.userId);
        }).catch((err) => {
          console.log(err);
        });}
        else{
            console.log("UNDEFIDNED");
        }
        console.log("gmail: "+props.userId);
    }, [props.userId]);

    function FormSubmit(event)
    {
        event.preventDefault();
        
        console.log(studentDetails);
        Axios.post("http://localhost:3001/student", {...studentDetails,id: props.userId}).then((res) => {
            console.log(res.data);
        });
    }

    function EnterDetails(event)
    {
        setDetails((prev) => {
            return {...prev,[event.target.name]: event.target.value};
        });
    }

    function SetDegree(value)
    {
        switch(value)
        {
            case "be":
                return "B.E";
            case "mtech":
                return "M.Tech";
            default:
                return "Select Degree";
        }
    }

    function SetCourse(value)
    {
        switch(value)
        {
            case "cse":
                return "Computer Science Engineering";
            case "ise":
                return "Information Science Engineering";
            case "eee":
                return "Electrical & Electronics Engineering";
            case "ece":
                return "Electronics & Communication Engineering";
            case "me":
                return "Mechanical Engineering";
            case "cv":
                return "Civil Engineering";
            default:
                return "Select Course";
        }
    }

    function SetGender(value)
    {
        switch(value){
            case "Male":
                return "Male";
            case "Female":
                return "Female";
            case "Other":
                return "Other";
            default:
                return "Select Gender";
        }
    }

    return(
        <div className="container">
            <div className="row">
                <h1 className="welcome-text">Edit Your Details</h1>
            </div>
            <div className="row">
                <div className="container form-box">
                    <form onSubmit={(event) => FormSubmit(event)} className="create-note text-left">
                        <div className="row g-0">
                            <FormInput name="Name" tag="name" type="text" fill={false} change={(value) => EnterDetails(value)} setValue={studentDetails.name}/>
                            <FormInput name="Phone Number" tag="phoneNo" type="text" fill={false} change={(value) => EnterDetails(value)} setValue={studentDetails.phoneNo}/>
                            <FormInput name="Personal Email" tag="personalEmail" type="email" fill={false} change={(value) => EnterDetails(value)} setValue={studentDetails.personalEmail}/>
                            <FormInput name="College Email" tag="collegeEmail" type="email" fill={false} change={(value) => EnterDetails(value)} setValue={studentDetails.collegeEmail}/>
                            <div className="col-lg-6 form-section">
                                <label htmlFor="exampleInputEmail1" className="form-label col-md-12">Degree</label>
                                <select className="form-select col-md-6  form-style" aria-label="Default select example" name="degree" onChange={EnterDetails}>
                                    <option defaultValue>{SetDegree(studentDetails.degree)}</option>        
                                    {studentDetails.degree==="be" ? null : <option value="be">B.E</option>}
                                    {studentDetails.degree==="mtech" ? null : <option value="mtech">M.Tech</option>}
                                </select>
                            </div>
                            <div className="col-lg-6 form-section">
                                <label htmlFor="exampleInputEmail1" className="form-label col-md-12">Department</label>
                                <select className="form-select col-md-6  form-style" aria-label="Default select example" name="course" onChange={EnterDetails} >
                                    <option defaultValue>{SetCourse(studentDetails.course)}</option>
                                    {studentDetails.course==="cse" ? null : <option value="cse">Computer Science Engineering</option>}
                                    {studentDetails.course==="ise" ? null : <option value="ise">Information Science Engineering</option>}
                                    {studentDetails.course==="eee" ? null : <option value="eee">Electrical & Electronics Engineering</option>}
                                    {studentDetails.course==="ece" ? null : <option value="ece">Electronics & Communication Engineering</option>}
                                    {studentDetails.course==="me" ? null : <option value="me">Mechanical Engineering</option>}
                                    {studentDetails.course==="cv" ? null : <option value="cv">Civil Engineering</option>}
                                </select>
                            </div>
                            <FormInput name="CGPA (University)" tag="uniCGPA" type="text" fill={false} change={(value) => EnterDetails(value)} setValue={studentDetails.uniCGPA}/>
                            <FormInput name="CGPA / Percentage (Grade 12)" tag="gradeCGPA" type="text" fill={false} change={(value) => EnterDetails(value)} setValue={studentDetails.gradeCGPA}/>
                            <div className="col-lg-6 form-section">
                                <label htmlFor="exampleInputEmail1" className="form-label col-md-12">Gender</label>
                                <select className="form-select col-md-6  form-style" aria-label="Default select example" name="gender" onChange={EnterDetails}>
                                    <option defaultValue>{SetGender(studentDetails.gender)}</option>        
                                    {studentDetails.gender==="Male" ? null : <option value="Male">Male</option>}
                                    {studentDetails.gender==="Female" ? null : <option value="Female">Female</option>}
                                    {studentDetails.gender==="Other" ? null : <option value="Other">Other</option>}
                                </select>
                            </div>
                            <FormInput name="USN" tag="usn" type="text" fill={false} change={(value) => EnterDetails(value)} setValue={studentDetails.usn}/>
                            <FormInput name="Active Backlogs" tag="backlogs" type="number" fill={false} change={(value) => EnterDetails(value)} setValue={studentDetails.backlogs}/>
                            <FormInput name="Resume (Google Drive Link)" tag="resume" type="text" fill={false} change={(value) => EnterDetails(value)} setValue={studentDetails.resume}/>
                        </div>
                        <div className="row g-0 d-flex justify-content-center" style={{margin: "2vh 1vw", padding: "0.5vh 1vw"}}>
                            <div className="col-md-1">
                                <button type="submit" onClick={() => {props.changePage(true); setSaved(true)}} className="btn btn-primary btn-apply">{(saved ? <DoneOutlineIcon fontSize="small"/> : "Save")}</button>
                            </div>
                        </div>
                    </form>              
                </div>
            </div>
        </div>      
    );
}

export default DetailSection;