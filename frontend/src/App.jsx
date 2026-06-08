import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [message, setMessage] = useState("");

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
          skills
        }
      );
      console.log(response.data);
      setMessage(response.data.message);

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
      placeholder="Skills"
      rows="5"
      cols="40"
      value={skills}
      onChange={(e) => setSkills(e.target.value)}
    />

    <br/><br/>

    <button onClick= {generateResume}>
      Generate Resume
    </button>

    <p>{message}</p>
   </div>
  );
}

export default App;
