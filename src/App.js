import './App.css';
import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import JobSection from "./components/JobSection";
import JobInsert from "./components/JobInsert";
import DetailSection from "./components/DetailSection";

function App() {
  const [jobs,displayJobs] = useState(false);
  const [student,setUser] = useState(false);

  function ViewJobs(showJobs)
  {
      displayJobs(showJobs);
  }

  function ViewStudent()
  {
    if(!jobs)
      return <DetailSection/>;
  }

  function ViewPC()
  {
    if(!jobs)
      return <JobInsert/>;
  }

  return (
    <div className="App">
      <Navbar changePage={ViewJobs}/>
      {student ? ViewStudent() : ViewPC()}
    </div>
  );
}

export default App;
