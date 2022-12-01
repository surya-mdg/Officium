import React from "react";
import Axios from "axios";
import FormInput from "./FormInput";

//Contains form inputs as name, phoneNo, personalEmail, collegeEmail, degree, course, uniCGPA, gradeCGPA, gender, usn, backlogs, resume.

function DetailSection(props)
{
    function FormSubmit(event)
    {
         event.preventDefault();

        const target = event.target;
        const studentDetails = {id: props.user.userId, name: target.name.value, phoneNo: target.phoneNo.value, personalEmail: target.personalEmail.value, collegeEmail: target.collegeEmail.value,
                                degree: target.degree.value, course: target.course.value, uniCGPA: target.uniCGPA.value, gradeCGPA: target.gradeCGPA.value,
                                 usn: target.usn.value, gender: target.gender.value, backlogs: target.backlogs.value, resume: target.resume.value};
        
        Axios.post("http://localhost:3001/student", studentDetails).then((res) => {
            console.log(res.data);
        });
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
                            <FormInput name="Name" tag="name" type="text" fill={false}/>
                            <FormInput name="Phone Number" tag="phoneNo" type="text" fill={false}/>
                            <FormInput name="Personal Email" tag="personalEmail" type="email" fill={false}/>
                            <FormInput name="College Email" tag="collegeEmail" type="email" fill={false}/>
                            <div className="col-lg-6 form-section">
                                <label htmlFor="exampleInputEmail1" className="form-label col-md-12">Degree</label>
                                <select className="form-select col-md-6  form-style" aria-label="Default select example" name="degree">
                                    <option defaultValue>Select Degree</option>
                                    <option value="be">B.E</option>
                                    <option value="mtech">M.Tech</option>
                                </select>
                            </div>
                            <div className="col-lg-6 form-section">
                                <label htmlFor="exampleInputEmail1" className="form-label col-md-12">Department</label>
                                <select className="form-select col-md-6  form-style" aria-label="Default select example" name="course">
                                    <option defaultValue>Select Department</option>
                                    <option value="cse">Computer Science Engineering</option>
                                    <option value="ise">Information Science Engineering</option>
                                    <option value="eee">Electrical & Electronics Engineering</option>
                                    <option value="ece">Electronics & Communication Engineering</option>
                                    <option value="me">Mechanical Engineering</option>
                                    <option value="cv">Civil Engineering</option>
                                </select>
                            </div>
                            <FormInput name="CGPA (University)" tag="uniCGPA" type="text" fill={false}/>
                            <FormInput name="CGPA / Percentage (Grade 12)" tag="gradeCGPA" type="text" fill={false}/>
                            <div className="col-lg-6 form-section">
                                <label htmlFor="exampleInputEmail1" className="form-label col-md-12">Gender</label>
                                <div className="form-check col-md-3 form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Male"/>
                                    <label className="form-check-label form-style" htmlFor="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check col-md-3 form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Female"/>
                                    <label className="form-check-label form-style" htmlFor="inlineRadio2">Female</label>
                                </div>
                                <div className="form-check col-md-3 form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Other"/>
                                    <label className="form-check-label form-style" htmlFor="inlineRadio2">Other</label>
                                </div>
                            </div>
                            <FormInput name="USN" tag="usn" type="text" fill={false}/>
                            <FormInput name="Active Backlogs" tag="backlogs" type="number" fill={false}/>
                            <FormInput name="Resume (Google Drive Link)" tag="resume" type="text" fill={false}/>
                        </div>
                        <div className="row g-0 d-flex justify-content-center" style={{margin: "2vh 1vw", padding: "0.5vh 1vw"}}>
                            <div className="col-md-1">
                                <button type="submit" className="btn btn-primary btn-apply">Save</button>
                            </div>
                        </div>
                    </form>              
                </div>
            </div>
        </div>
        
    );
}

export default DetailSection;