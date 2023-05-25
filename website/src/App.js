import logo from './assets/logo.png'
import './css/App.css';
import './css/experience.css'
import './css/projects.css'
import './css/about.css'
import './css/contact.css'
import './css/home.css'
import './index.css'
import resume from './assets/resume.pdf'
import ray from './assets/ray.jpg'
import imguessr from './assets/imguessr.jpg'
import unity from './assets/unity.png'
import budgetingApp from './assets/budgeting-app.png'
import spasm from './assets/spasm.png'
import ts from './assets/ts.png'
import web from './assets/web.png'
import python from './assets/python.png'
import react from './assets/react.png'
import express from './assets/express.png'
import java from './assets/java.png'
import node from './assets/node.png'
import mongo from './assets/mongo.png'
import { useEffect, useRef, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Link, animateScroll} from 'react-scroll'
import { motion, useAnimation, useInView } from 'framer-motion'

function App() {
 
  const ref = useRef(null)
  const [sticky, setSticky] = useState(false)
  const isInView = useInView[ref, {once: true}]
 
  const mainControls = useAnimation()

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

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  },[isInView])
  
  return (
    <div className="App">
      <div className={sticky? "header" : "no-header"}>
        <img className="logo" src={logo} alt="logo" onClick={() => animateScroll.scrollToTop()}></img>
        <ul className="nav-links">
          <li><Link className='links' to="about" spy={true} smooth={true} offset={20} duration={700}>ABOUT</Link></li>
          <li><Link className='links' to="experience" spy={true} smooth={true} offset={20} duration={700}>EXPERIENCE</Link></li>
          <li><Link className='links' to="projects" spy={true} smooth={true} offset={20} duration={700}>PROJECTS</Link></li>
          <li><Link className='links' to="contact" spy={true} smooth={true} offset={20} duration={700}>CONTACT</Link></li>
        </ul>
      </div>
      <div className="home" >
        <div className='home-container'>  
          <motion.div
            className='bottom-left'
            initial={{opacity: 0, y: 200}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}>
          </motion.div>
          <motion.div 
            className='right-corner'
            initial={{opacity: 0, y: -200}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}>
          </motion.div>
          <motion.div 
            className='top-left'
            initial={{opacity: 0, x: 200}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1}}>
          </motion.div>
          <motion.div 
            className='bottom-right'
            initial={{opacity: 0, x: -200}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1}}>  
          </motion.div>
          <motion.div 
            className='name'
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}>
            Hello world, i am
          </motion.div>
          <motion.h2 
            className='ray'
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1.5}}>
            RAY HO
          </motion.h2>
          <div className="typed">
            <Typewriter
              words={['','COMPUTER ENGINEERING STUDENT', 'SOFTWARE ENGINEER', 'BREAK DANCER', 'MR. WORLDWIDE']}
              loop={Infinity}
              deleteSpeed={50}
              typeSpeed={50}
              cursor={true}
              cursorStyle='|'
              cursorColor='crimson'
            />
          </div>
        </div>
        <motion.h5 
            className='scroll-div'
            initial={{opacity: 0, y: 150}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}>
            <Link className='scroll' to="about" spy={true} smooth={true} offset={20} duration={700}>scroll down ↓</Link>
        </motion.h5>
      </div>
      <div className='about'>
        <motion.img src={ray}
            initial={{opacity: 0, x: -150}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.5}}
            viewport={{ once: true }}></motion.img>
        <div className='text'>
          <motion.h1 
            className='about-title'
            initial={{opacity: 0, x: 150}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            viewport={{ once: true }}
          >ABOUT</motion.h1>
          <motion.div 
            className="line"
            initial={{opacity: 0, x: 150}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.25}}
            viewport={{ once: true }}>__________________________________________</motion.div>
          <motion.h2
            initial={{opacity: 0, x: 150}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.5}}
            viewport={{ once: true }}>Hey there! My name is Ray Ho, I'm a third year Computer Engineering student studying at the University of British Columbia. So far, I've had the pleasure
            of working as a software developer with a <a href="https://www.cityu.edu.hk/">university based in Hong Kong</a>, and a <a href="https://github.com/BEARUBC">student-led engineering design team from UBC</a>.
          </motion.h2>
          <motion.h2 
            className="second"
            initial={{opacity: 0, x: 150}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.5}}
            viewport={{ once: true }}>I'm currently a software engineer intern at <a href="https://www.alida.com/">Alida</a>.
          I'm open to any tech internship roles starting in Spring 2024 and Summer 2024!
          </motion.h2>
          <div className='technologies'>
            <motion.h2
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.75}}
              viewport={{ once: true }}
              >Technologies
            </motion.h2>
            <motion.div className="line-2"
              initial={{opacity: 0, y: 75}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.75}}
              viewport={{ once: true }}>_______________
            </motion.div>
            <motion.div className="list-container"
              initial={{opacity: 0, y: 75}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 1}}
              viewport={{ once: true }}>
              <div>
                <img src={web}></img>
                <h3>Web Dev</h3>
              </div>
              <div> 
                <img src={ts}></img>
                <h3>TypeScript</h3>
              </div>
              <div>
                <img src={python}></img>
                <h3>Python</h3>
              </div>
              <div>
                <img src={java}></img>
                <h3>Java</h3>
              </div>
              <div>
                <img src={node}></img>
                <h3>Node</h3>
              </div>
              <div>
                <img src={express}></img>
                <h3>Express.js</h3>
              </div>
              <div>
                <img src={react}></img>
                <h3>React</h3>
              </div>
              <div>
                <img src={mongo}></img>
                <h3>MongoDB</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='experience'>
        <div className="experience-title">
          <motion.h1
            initial={{opacity: 0, x: 200}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.5}}
            viewport={{ once: true }}>EXPERIENCE</motion.h1>
          <motion.div className='line-two'
            initial={{opacity: 0, x: 200}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            viewport={{ once: true }}>__________________________________________________________</motion.div>
        </div>
        <motion.div className='experience-container'
          initial={{opacity: 0, x: -200}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1, delay: 1}}
          viewport={{ once: true }}>
          <div>
            <h4><a href="https://www.alida.com/">ALIDA</a></h4>
            <h2>Software Engineer Intern</h2>
            <h3>May 2023 - Present</h3>
            <p>Working on platform microservices with TypeScript and Node!</p>
          </div>
          <div>
            <h4><a href="https://github.com/BEARUBC">UBC BIONICS</a></h4>
            <h2>Embedded Software Developer </h2>
            <h3>Sep 2022 - Apr 2023</h3>
            <p>As a software developer at UBC Bionics, I worked in a team of 40 engineering students on a bionic arm. My main role was writing code that parses raw electrical
              signals from EMG sensors and a polling system for grip optimization in Python.
            </p>
          </div>
          <div>
            <h4><a href="https://www.cityu.edu.hk/">CITY UNIVERSITY OF HONG KONG</a></h4>
            <h2>Software Developer</h2>
            <h3>July 2022</h3>
            <p>
              In this role, I was tasked with building an automated data system in Google Sheets to eliminate the amount of manual work administrative staff had to perform when
              data keeping. I was able to automate 90% of actions involving data organization with JavaScript programs that run at daily and weekly intervals in Google Apps Scripts, successfuly
              delivering a product that exceeded my stakeholders' expectations.
            </p>
          </div>
        </motion.div>
      </div>
      <div className='projects'>
          <div className='projects-title'>
            <motion.h1
              initial={{opacity: 0, x: 200}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 1, delay: 0.5}}
              viewport={{ once: true }}>PROJECTS</motion.h1>
            <motion.div className='line-three'
              initial={{opacity: 0, x: 200}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 1}}
              viewport={{ once: true }}>_____________________________</motion.div>
          </div>
          <div className='projects-container'>
              <motion.div className='row'
                initial={{opacity: 0, x: -200}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1, delay: 0.75}}
                viewport={{ once: true }}>
                  <div className='image-container' onClick={() => {window.open('https://github.com/Raywnh/Vehicle-Streaming-Platform')}}>
                    <h2 className='project-name'>SPASM.TV</h2>
                    <img className='image' src={spasm}>
                    </img>
                    <p className='overlay'>A video streaming platform that comes with facial recognition and allows you to remote control a car powered by a Raspberry PI</p>
                  </div>
                  <div className='image-container' onClick={() => {window.open('https://github.com/Raywnh/imguessr.io')}}>
                    <h2 className='project-name'>IMGUESSR.IO</h2>
                    <img className='image' src={imguessr}>
                    </img>
                    <p className='overlay'>An image guessing game powered by AI generated art built with OpenAI's DALL-E model</p>
                  </div>
              </motion.div>
              <motion.div className='row'
                initial={{opacity: 0, x: 200}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1, delay: 0.75}}
                viewport={{ once: true }}>
                  <div className='image-container' onClick={() => {window.open('https://github.com/Raywnh/budgeting-app')}}>
                    <h2 className='project-name'>BUDGETING APP</h2>
                    <img className='image' src={budgetingApp}>
                    </img>
                    <p className='overlay'>A fullstack budgeting web application created with the MERN stack and Firebase for authentication</p>
                  </div>
                  <div className='image-container' onClick={() => {window.open('https://github.com/Raywnh/Unity-Dodging-Game')}}>
                    <h2 className='project-name'>UNITY GAME</h2>
                    <img className='image' src={unity}>
                    </img>
                    <p className='overlay'>A simple dodging video game made with Unity that increases in difficulty as time goes on</p>
                  </div>
              </motion.div>
          </div>
      </div>
      <div className='contact'>
        <motion.h1
            initial={{opacity: 0, y: -200}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.5}}
            viewport={{ once: true }}>CONTACT</motion.h1>
        <motion.h2 className='line-four'
            initial={{opacity: 0, x: -200}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            viewport={{ once: true }}>______________________________________</motion.h2>
          <motion.ul
            initial={{opacity: 0, x: 200}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.75}}
            viewport={{ once: true }}>
            <li><a href="https://www.linkedin.com/in/ray-ho-wnh/">LINKEDIN</a></li>
            <li><a href="https://github.com/Raywnh">GITHUB</a></li>
            <li><a href="mailto:rayhownh@gmail.com">EMAIL</a></li>
            <li><a href={resume} download>RESUME</a></li>
          </motion.ul>
      </div>
    </div>
  );
}

export default App;
