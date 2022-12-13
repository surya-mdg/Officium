import React, {useState} from "react";
import Axios from "axios";
import {Navigate} from "react-router-dom";
import WorkIcon from '@mui/icons-material/Work';
import PortraitIcon from '@mui/icons-material/Portrait';
import IconButton from "@mui/material/IconButton"
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Navbar(props)
{
    const [logout,setLogout] = useState(false);

    function Logout()
    {
        Axios.post("http://localhost:3001/logout",{id:"fd"}).then((res) => {
          console.log("Logout");
          //setLogout(true);
        }).catch((err) => {
          console.log(err);
        });

        setLogout(true);
    }

    if(logout)
    {
        return <Navigate to="/"/>;
    }
        

    function LogoChange()
    {
        if(props.student)
        {
            return (<IconButton className="btn-navbar" onClick={() => {props.changePage(false);}} aria-label="add an alarm">
                        <PortraitIcon fontSize="large"/>
                    </IconButton>);
        }
        else{
            return (<IconButton className="btn-navbar" onClick={() => {props.changePage(false);}} aria-label="add an alarm">
                        <AddCircleOutlineIcon fontSize="large"/>
                    </IconButton>);
        }
    }

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
                            {LogoChange()}
                        </li>
                        <li className="nav-item">
                            <IconButton className="btn-navbar" onClick={() => {props.changePage(true);}} aria-label="add an alarm">
                                <WorkIcon fontSize="large"/>
                            </IconButton>
                        </li>
                        <li className="nav-item">
                            <IconButton className="btn-navbar" onClick={() => Logout()} aria-label="add an alarm">
                                <LogoutIcon fontSize="large"/>
                            </IconButton>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;