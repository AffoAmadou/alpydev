import { useState, useEffect, useRef } from 'react'
import { Route, Routes, useActionData } from "react-router-dom";
import { useSmoothScroll } from './hooks/useSmoothScroll';
import ReactDOM from 'react-dom';
import * as THREE from "three";
//Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { useThree } from './hooks/useThree';
import ThreeApp from './threejs/ThreeApp'


export default function App() {
  let lenis = useSmoothScroll();

  console.log(lenis)
 
  //The argument for useThree is your threejs main class
  const canvas = useThree(ThreeApp);


  return (
    <>
      <section className="containerRef" data-scroll-container>
        <Routes>
          <Route path="/" element={<Home template="home"  lenis={lenis} />} ></Route>
          <Route path="portfolio" element={<Portfolio />}></Route>
        </Routes>

      </section>
      <div className="cont" ref={canvas} style={{ height: "100vh" }} />
    </>
  )
}


