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
        <div className='name'>Hello, i am</div>
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
          <h1>PLACEHOLDER</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
