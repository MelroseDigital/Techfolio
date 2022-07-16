import "./App.css";
import Footer from "../src/elements/Footer";
import image from "./images/TMblack.svg";
//import Intro from "./sections/Intro";
//import Route from "react";
// import Contact from "./sections/Contact";
// import Projects from "./sections/Projects";
// import Services from "./sections/Services";
// import Skills from "./sections/Skills";


function App() {
  return (
    <>
    {/* <Route><Intro /></Route> */}
      <div className="App">
        <header className="App-header">
          <img src={image} className="App-logo" alt="logo" />
          <p>
            Tenyce Melrose<code> : </code>Software Developer
          </p>
          <a
            className="App-link"
            href="https://github.com/MelroseDigital"
            target="_blank"
            rel="noopener"
          >
            View Github Profile
          </a>
          <a
            className="App-link"
            href="https://app.revature.com/profile/Melrose/6f3530d4bd907a14942dafda0fab0290 "
            target="_blank"
            rel="noopener"
          >
            View Professional Portfolio
            <a
            className="App-link"
            href="https://linkedin.com "
            target="_blank"
            rel="noopener"
          >
            View LinkedIn Profile
          </a>
          </a>
        </header>
      </div>
    
    
      {/* <Skills />
      <Projects />
      <Services />
      <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
