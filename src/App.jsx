import { useState, useEffect, useRef,useContext } from 'react'
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

import Preloader from './components/preloader';

//Components
import Navigation from './components/navigation'
import Footer from './components/footer'

import { ProjectContext } from './context/contex'



export default function App() {
  const { isLoading } = useContext(ProjectContext);

  let canvas = null;

 canvas = useThree(ThreeApp, isLoading);

  let lenis = useSmoothScroll();

  return (
    <>
      {isLoading ? <><Preloader  /> <div ref={canvas}></div> </> : (
        <>
          <section className="containerRef" data-scroll-container>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home template="home" />} ></Route>
              <Route path="Projets" element={<Projets template="projets" />}></Route>
              <Route path="Contact" element={<Contact template="contact" />} ></Route>
              <Route path="Apropos" element={<Apropos template="apropos" />} ></Route>
            </Routes>
          </section>
            <div className="cont" ref={canvas} style={{ height: "100vh" }} />
        </>
      )}
    </>
  );
}


