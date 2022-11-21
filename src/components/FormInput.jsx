import React from "react";

function FormInput(props)
{
    return (
        <div className={(props.fill) ? "col-lg-12 form-section" : "col-lg-6 form-section"}>
            <label for="exampleInputEmail1" className="form-label col-md-12">{props.name}</label>
            <input type={props.type} className="form-control col-md-2" id="exampleInputEmail1" aria-describedby="emailHelp" min="0"/>
        </div>
    );
}

export default FormInput;