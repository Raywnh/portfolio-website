import logo from './assets/logo.png'
import './App.css';
// import './experience.css'
import spasm from './assets/spasm.png'
import { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

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
        <div className='name'>Hello world, i am</div>
        <h2 className='ray'>RAY HO</h2>
        <div className="typed">
          <Typewriter
            words={['COMPUTER ENGINEERING STUDENT', 'SOFTWARE ENGINEER', 'BREAK DANCER', 'MR. WORLDWIDE']}
            loop={Infinity}
            deleteSpeed={50}
            typeSpeed={70}
            cursor={true}
            cursorStyle='|'
            cursorColor='crimson'
          />
        </div>
        <button className='scroll'>scroll down ↓</button>
      </div>
      <div className='about'>
        <div className='image-placeholder'>

        </div>
        <div className='text'>
          <h1>ABOUT</h1>
          <div className="line">__________________________________________</div>
          <h2>Hey there! My name is Ray Ho, I'm a third year Computer Engineering student studying at the University of British Columbia. So far, I've had the pleasure
            of working as a software developer with a <a href="https://www.cityu.edu.hk/">university based in Hong Kong</a>, and a <a href="https://github.com/BEARUBC">student-led engineering design team from UBC</a>.
          </h2>
          <h2 className="second">I'm currently a software engineer intern at <a href="https://www.alida.com/">Alida</a>.
          I'm open to any tech internship roles starting in Spring 2024 and Summer 2024!
          </h2>
          <div className='technologies'>
            <h2>Technologies—</h2>
            <div className="list-container">
              {/* <ul>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Java</li>
              </ul>
              <ul>
              <li>Python</li>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      <div className='experience'>
        <div className="experience-title">
          <h1>EXPERIENCE</h1>
          <div className='line-two'>__________________________________________________________</div>
        </div>
        <div className='experience-container'>
          <div>
            <h4><a>ALIDA</a></h4>
            <h2>Software Engineer Intern</h2>
            <h3>May 2023 - Present</h3>
            <p>Working on platform microservices with TypeScript and Node!</p>
          </div>
          <div>
            <h4><a>UBC BIONICS</a></h4>
            <h2>Embedded Software Developer </h2>
            <h3>Sep 2022 - Apr 2023</h3>
            <p>As a software developer at UBC Bionics, I worked in a team of 40 engineering students on a bionic arm. My main role was writing code that parses raw electrical
              signals from EMG sensors and a polling system for grip optimization in Python.
            </p>
          </div>
          <div>
            <h4><a>CITY UNIVERSITY OF HONG KONG</a></h4>
            <h2>Software Developer</h2>
            <h3>July 2022</h3>
            <p>
              In this role, I was tasked with building an automated data system in Google Sheets to eliminate the amount of manual work administrative staff had to perform when
              data keeping. I was able to automate 90% of actions involving data organization with JavaScript programs that run at daily and weekly intervals in Google Apps Scripts, successfuly
              delivering a product that exceeded my stakeholders' expectations.
            </p>
          </div>
        </div>
      </div>
      <div className='projects'>
          <div className='projects-title'>
            <h1>PROJECTS</h1>
            <div className='line-three'>_____________________________</div>
          </div>
          <div className='projects-container'>
              <div className='row-one'>
                <div className='image-container'>
                  <img className='image' src={spasm}>
                  </img>
                   <p className='overlay'>A video streaming platform that comes with facial recognition and allows you to remote control a car powered by a Raspberry PI</p>
                </div>
                <div className='image-container'>
                  <img className='image' src={spasm}>
                  </img>
                  <p className='overlay'>A video streaming platform that comes with facial recognition and allows you to remote control a car powered by a Raspberry PI</p>             
                </div>
              </div>
              <div className='row-two'>
                <div className='image-container'>
                <img className='image' src={spasm}>
                  </img>
                  <p className='overlay'>A video streaming platform that integrates facial recognition and allows you to remotely control a Raspberry PI powered car</p>            
                </div>
                <div className='image-container'>
                <img className='image' src={spasm}>
                  </img>
                  <p className='overlay'>A video streaming platform that comes with facial recognition and allows you to remote control a car powered by a Raspberry PI</p>              
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
