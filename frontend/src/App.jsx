import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [message, setMessage] = useState("");
  const [resumeData, setResumeData] = useState(null);
  const [summary, setSummary] = useState("");
  const [projects, setProjects] = useState("");


  const connectBackend = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload"
      );

      alert(response.data.message);
    } catch (error) {
      console.log(error);
      setMessage("Backend connection failed");
    }
  };

  const generateResume = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/upload",
        {
          name,
          email,
          phone,
          skills,
          summary,
          projects
        }
      );
      console.log(response.data);
      setMessage(response.data.message);
      setResumeData(response.data.data);

    }
    catch(error) {
      console.log(error);
      setMessage("Something went wrong");
    }
  };

  return (
   <div style={{ padding: "40px"}}>

    <h1>AI Resume Builder</h1>

    <input
      type="text"
      placeholder="Full Name"
      value={name}
      onChange={(e) =>  setName(e.target.value)}
    />

    <br/><br/>

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <br/><br/>

    <input
      type="text"
      placeholder="Phone Number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />

    <br/><br/>

    <textarea
         placeholder="Professional summary"
         value={summary}
         onChange={(e) => setSummary(e.target.value)}
    />  

    <br/><br/>

    <textarea
      placeholder="Skills"
      rows="5"
      cols="40"
      value={skills}
      onChange={(e) => setSkills(e.target.value)}
    />

    <br/><br/>

    <textarea
       placeholder="Projects"
       rows="3"
       cols="40"
       value={projects}
       onChange={(e) => setProjects(e.target.value)}
    />

    <br/><br/>

    <button onClick= {generateResume}>
      Generate Resume
    </button>

    <p>{message}</p>
    {resumeData && (

    <div className="resume-card">
      <h2>Resume Preview</h2>

      <h3>{resumeData.name}</h3>
      
      <hr />
      <p><strong>Email</strong> {resumeData.email}</p>
      <p><strong>Phone</strong> {resumeData.phone}</p>
      
      <h4>Summmary</h4>
      <p>{summary}</p>

      <h4>Projects</h4>
      <p>{projects}</p>

      <h4>Skills</h4>
      <p>{resumeData.skills}</p>
      
    </div>
     )}
   </div>
  );
}

export default App;
