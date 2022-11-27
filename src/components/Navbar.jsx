import React from "react";
import WorkIcon from '@mui/icons-material/Work';
import PortraitIcon from '@mui/icons-material/Portrait';
import IconButton from "@mui/material/IconButton"

function Navbar(props)
{
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Officium</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <IconButton className="btn-navbar" onClick={() => {props.changePage(false);}} aria-label="add an alarm">
                                <PortraitIcon fontSize="large"/>
                            </IconButton>
                        </li>
                        <li className="nav-item">
                            <IconButton className="btn-navbar" onClick={() => {props.changePage(true);}} aria-label="add an alarm">
                                <WorkIcon fontSize="large"/>
                            </IconButton>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;