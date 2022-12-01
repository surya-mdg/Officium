import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
// Student
import JobSection from "./components/JobSection";
import DetailSection from "./components/DetailSection";
import LoginPage from "./components/LoginPage";
// Placement Office
import JobInsert from "./components/JobInsert";
import JobStats from "./components/placement/JobStats";

function App() {
  const [jobs,displayJobs] = useState(true);
  const [student,setStudent] = useState(false);
  const [user, setUser] = useState({});

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
      return <><Navbar changePage={ViewJobs}/><DetailSection user={user}/></>;
    else
      return <><Navbar changePage={ViewJobs}/><JobSection user={user}/></>;
  }

  function ViewPC()
  {
    if(!jobs)
      return <><Navbar changePage={ViewJobs}/><JobInsert/></>;
    else
      return <><Navbar changePage={ViewJobs}/><JobStats/></>;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage AddUser={AddUser} SetView={(value) => setStudent(value)}/>}/>
          {student ? <Route path="/about" element={ViewStudent()}/> : <Route path="/about" element={ViewPC()}/>}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
