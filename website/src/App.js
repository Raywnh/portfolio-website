import logo from './assets/logo.png'
import './App.css';
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
              <ul>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
              <ul>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>JUnit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='experience'>

      </div>
    </div>
  );
}

export default App;
