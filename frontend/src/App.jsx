function App() {
  return (
    <div>
      <nav>
        <h2>AI Resume Builder</h2>
      </nav>

      <section>
        <h1>Create ATS - Friendly Resumes with AI</h1>

        <p>
          Upload your resume and improve it using AI
        </p>
        <button> Upload your resume and improve it using AI </button>
      </section>

      <section>
        <h2>Features</h2>

        <div className="features" >

        <div className="card">
          <h3>ATS Score</h3>
          <p>Check resume compatibility</p>
        </div>

        <div className="card">
          <h3>Resume Rewriter</h3>
          <p>Improve resume with AI</p>
        </div>

        <div className="card">
          <h3>Cover Letter</h3>
          <p>Generate cover letters</p>
        </div>

        <div className="card">
          <h3>Interview Questions</h3>
          <p>Prepare for intervies</p>
        </div>
        </div>

      </section>
    </div>
  );
}
export default App;
