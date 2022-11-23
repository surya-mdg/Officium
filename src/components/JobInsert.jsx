import React from "react";
import FormInput from "./FormInput";

function JobInsert()
{
    return(
        <div className="container">
            <div className="row">
                <h1 className="welcome-text">Add a Job</h1>
            </div>
            <div className="row">
                <div className="container form-box">
                    <form onSubmit={(event) => {event.preventDefault();}} className="create-note text-left">
                        <div className="row g-0">
                            <FormInput name="Company Name" type="text" fill={false}/>
                            <div className="col-lg-6 form-section">
                                <label for="exampleInputEmail1" className="form-label col-md-12">Job Type</label>
                                <select className="form-select col-md-6  form-style" aria-label="Default select example">
                                    <option selected>Select Type</option>
                                    <option value="1">Internship</option>
                                    <option value="2">Full Time</option>
                                </select>
                            </div>
                        </div>
                        <div className="row g-0">
                            <FormInput name="Last Date" type="date" fill={false}/>
                            <FormInput name="Job Role" type="text" fill={false}/>
                        </div>
                        <div className="row g-0">
                            <FormInput name="Test Date" type="date" fill={false}/>
                            <FormInput name="Duration" type="text" fill={false}/>
                        </div>
                        <div className="row g-0">
                            <FormInput name="Interview Date" type="date" fill={false}/>
                            <FormInput name="Salary" type="text" fill={false}/>
                        </div>
                        <div className="row g-0">
                            <FormInput name="Logo URL" type="text" fill={true}/>
                        </div>
                        <div className="row g-0 d-flex justify-content-center" style={{margin: "2vh 1vw", padding: "0.5vh 1vw"}}>
                            <div className="col-md-1">
                                <button type="submit" className="btn btn-primary btn-apply">Add</button>
                            </div>
                        </div>
                    </form>              
                </div>
            </div>
        </div>
        
    );
}

export default JobInsert;