import logo from './assets/logo.png'
import './App.css';
import { useEffect, useState } from 'react'
import TypeWriter from 'typewriter-effect'

function App() {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100)
        setSticky(true)
      else if (window.scrollY == 0) {
        setSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
  },[])
  
  return (
    <div className="App">
      <div className={sticky? "header" : "no-header"}>
        <img className="logo" src={logo} alt="logo"></img>
        <ul className="nav-links">
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">EXPERIENCE</a></li>
          <li><a href="#">PROJECTS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
      <div className="home">
        <div className="name">
          <TypeWriter onInit={(typewriter) => {
            typewriter.typeString("I LOVE YOU").pauseFor(1000).start()
          }}/>
        </div>
      </div>
      <div className="about">
        ABOUT
      </div>
      <div className="exp">
        EXPERIENCE
      </div>  
      <div className="projects">
        PROJECTS
      </div>
      <div className="contact">
        CONTACT
      </div>
    </div>
  );
}

export default App;
