import './App.css';
import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import JobSection from "./components/JobSection";
import JobInsert from "./components/JobInsert";
import DetailSection from "./components/DetailSection";
import LoginPage from "./components/LoginPage";

function App() {
  const [jobs,displayJobs] = useState(true);
  const [student,setUser] = useState(true);

  function ViewJobs(showJobs)
  {
      displayJobs(showJobs);
  }

  function ViewStudent()
  {
    if(!jobs)
      return <DetailSection/>;
    else
      return <JobSection/>;
  }

  function ViewPC()
  {
    if(!jobs)
      return <JobInsert/>;
  }

  return (
    <div className="App">
      {/* <Navbar changePage={ViewJobs}/>
      {student ? ViewStudent() : ViewPC()} */}
      <LoginPage/>
    </div>
  );
}

export default App;
