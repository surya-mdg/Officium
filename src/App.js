import './App.css';
import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import JobSection from "./components/JobSection";
import DetailSection from "./components/DetailSection";

function App() {
  const [jobs,displayJobs] = useState(true);

  function ViewJobs(showJobs)
  {
      displayJobs(showJobs);
  }

  return (
    <div className="App">
      <Navbar changePage={ViewJobs}/>
      {jobs ? <JobSection /> : <DetailSection />}
    </div>
  );
}

export default App;
