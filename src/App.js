import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
// Student
import JobSection from "./components/student/JobSection";
import DetailSection from "./components/student/DetailSection";
import LoginPage from "./components/LoginPage";
// Placement Office
import JobInsert from "./components/placement/JobInsert";
import JobStats from "./components/placement/JobStats";

function App() {
  const [jobs,displayJobs] = useState(true);
  const [student,setStudent] = useState(false);
  const [user, setUser] = useState({userName: "", userId: ""});

  function AddUser(newUser)
  {
    setUser(newUser);
  }

  function ViewJobs(showJobs)
  {
      displayJobs(showJobs);
  }

  function ViewStudent()
  {
    if(!jobs)
      return <><Navbar changePage={ViewJobs} student={true}/><DetailSection userId={user.userId} changePage={ViewJobs}/></>;
    else if(user.userId === "")
      return <Navigate to="/"/>;
    else
      return <><Navbar changePage={ViewJobs} student={true}/><JobSection user={user} userId={user.userId} changePage={ViewJobs}/></>;
      
  }

  function ViewPC()
  {
    if(!jobs)
      return <><Navbar changePage={ViewJobs} student={false}/><JobInsert changePage={ViewJobs}/></>;
    else
      return <><Navbar changePage={ViewJobs} student={false}/><JobStats/></>;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage AddUser={AddUser} SetView={(value) => { setStudent(value)}}/>}/>
          {student ? <Route path="/about" element={ViewPC()}/> : <Route path="/about" element={ViewStudent()}/>}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
