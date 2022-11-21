import React from "react";
import FormInput from "./FormInput";

function DetailSection()
{
    return(
        <div className="container">
            <div className="row">
                <h1 className="welcome-text">Edit Your Details</h1>
            </div>
            <div className="row">
                <div className="container form-box">
                    <form onSubmit={(event) => {event.preventDefault();}} className="create-note text-left">
                        <div className="row g-0">
                            <FormInput name="Name" type="text" fill={false}/>
                            <div className="col-lg-6 form-section">
                                <label for="exampleInputEmail1" className="form-label col-md-12">Gender</label>
                                <div className="form-check col-md-3 form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label className="form-check-label form-style" for="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check col-md-3 form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label className="form-check-label form-style" for="inlineRadio2">Female</label>
                                </div>
                                <div className="form-check col-md-3 form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label className="form-check-label form-style" for="inlineRadio2">Other</label>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0">
                            <FormInput name="Personal Email" type="email" fill={false}/>
                            <FormInput name="College Email" type="email" fill={false}/>
                        </div>
                        <div className="row g-0">
                            <div className="col-lg-6 form-section">
                                <label for="exampleInputEmail1" className="form-label col-md-12">Degree</label>
                                <select className="form-select col-md-6  form-style" aria-label="Default select example">
                                    <option selected>Select Degree</option>
                                    <option value="1">B.E</option>
                                    <option value="1">M.Tech</option>
                                </select>
                            </div>
                            <div className="col-lg-6 form-section">
                                <label for="exampleInputEmail1" className="form-label col-md-12">Course</label>
                                <select className="form-select col-md-6  form-style" aria-label="Default select example">
                                    <option selected>Select Course</option>
                                    <option value="1">Computer Science Engineering</option>
                                    <option value="1">Information Science Engineering</option>
                                    <option value="1">Electrical & Electronics Engineering</option>
                                    <option value="1">Electronics & Communication Engineering</option>
                                    <option value="1">Mechanical Engineering</option>
                                    <option value="1">Civil Engineering</option>
                                </select>
                            </div>
                        </div>
                        <div className="row g-0">
                            <FormInput name="CGPA (University)" type="text" fill={false}/>
                            <FormInput name="CGPA (Grade 12)" type="text" fill={false}/>
                        </div>
                        <div className="row g-0">
                            <FormInput name="Active Backlogs" type="number" fill={false}/>
                            <FormInput name="Resume" type="file" fill={false}/>
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