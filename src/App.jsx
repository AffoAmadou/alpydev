import { useState, useEffect, useRef } from 'react'
import { Route, Routes, useActionData } from "react-router-dom";
import { useSmoothScroll } from './hooks/useSmoothScroll';
import ReactDOM from 'react-dom';
import * as THREE from "three";
//Pages
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import Apropos from './pages/Apropos';
import { useThree } from './hooks/useThree';
import ThreeApp from './threejs/ThreeApp'

//Components
import Navigation from './components/navigation'
import Footer from './components/footer'


export default function App() {
  let lenis = useSmoothScroll();

  //The argument for useThree is your threejs main class
  const canvas = useThree(ThreeApp);


  return (
    <>
      <section className="containerRef" data-scroll-container>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home template="home" />} ></Route>
          <Route path="Projets" element={<Projets template="projets" />}></Route>
          <Route path="Contact" element={<Contact template="contact" />} ></Route>
          <Route path="Apropos" element={<Apropos template="apropos" />} ></Route>
        </Routes>
        {/* <Footer /> */}
      </section>
      <div className="cont" ref={canvas} style={{ height: "100vh" }} />
    </>
  )
}


