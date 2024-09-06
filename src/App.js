import './App.css';
import './fonts.css';
import stamp from './images/torontostamp.png';
import Clock from './components/Clock.js';
import React, { useRef } from 'react';
import { Link, Element } from 'react-scroll';

function App() {

  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const aboutMeRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({behaviour: 'smooth', block: 'start'});
  }

  return (
    <>
      <div class="div-with-pattern">
        <Element name = 'homesection' class = 'home'>
          <section class = 'introsection'>
            <p class = "intro">Hey! I'm Jeffrey</p>
            <p class = 'intro-text'>A 2nd year student studying computer science at TMU (formerly Ryerson).</p>
            <p class = 'and'>&</p>
            <p class = 'youandme'>I present to YOU, everything about ME.</p>
          </section>
          <section class = 'clockportraitcontainer'>
            <div class = 'clock'><Clock timeZone="US/Eastern"/></div>
            <div class = 'portrait'>Waiting 8 years for a pic</div>
          </section>
          <ul class = 'navigationbuttons'>
            <li><Link to = 'homesection' smooth = 'true' duration = {400}><button class = 'basic-button'>Home</button></Link></li>
            <li><Link to = 'projectsection' smooth = 'true' durection = {400}><button class = 'basic-button'>Projects</button></Link></li>  
            <li><button class = 'basic-button'>About me</button></li> 
          </ul>
        </Element>
        <div class = 'homedivider'></div>
        <Element name = 'projectsection' class = 'projectcontainer'>
          <section class = 'projectblock'>
          <button class = 'project1'>1</button>
          <header class = 'p1title '>lorem ipsum</header>
          <p class = 'p1desc'>Hello</p>
          <button class = 'project2'>2</button>
          <header class = 'p2title '>lorem ipsum</header>
          <p class = 'p2desc'>Hello</p>
          <button class = 'project3'>3</button>
          <header class = 'p3title '>lorem ipsum</header>
          <p class = 'p3desc'>Hello</p>
          <button class = 'project4'>4</button>
          <header class = 'p4title '>lorem ipsum</header>
          <p class = 'p4desc'>Hello</p>
          </section>
        </Element>
        <div class = 'regard'></div>
      </div>
    </>
  );
}

export default App;
