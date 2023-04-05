import { Link } from 'react-router-dom'
import Navigation from '../components/navigation'
import { useEffect, useRef } from 'react'
import Sketch from '../threejs/ThreeApp'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import five from '../assets/five.png'
import six from '../assets/six.png'
import seven from '../assets/seven.png'
import eight from '../assets/eight.png'


export default function Home({ }) {

    return (
        <>
            <div className="home">
                <Navigation />
                <div className="home__wrapper">
                    <div className="home__container">
                        <div className="home__header__wrapper">
                            <div className="home__header">
                                <h1 className="home__title">Solutions web de qualité pour renforcer les entreprises.</h1>
                            </div>
                        </div>

                        <div className="home__project">
                            <h2 className="home__project__title">Nos Projets</h2>
                            <div className="home__project__grid">
                                <figure className='home__project__media'>
                                    <img src={one} alt="" className="home__project__media__image" />
                                </figure>

                                <figure className='home__project__media'>
                                    <img src={two} alt="" className="home__project__media__image" />
                                </figure>

                                <figure className='home__project__media'>
                                    <img src={three} alt="" className="home__project__media__image" />
                                </figure>

                                <figure className='home__project__media'>
                                    <img src={four} alt="" className="home__project__media__image" />
                                </figure>

                                <figure className='home__project__media'>
                                    <img src={five} alt="" className="home__project__media__image" />
                                </figure>

                                <figure className='home__project__media'>
                                    <img src={six} alt="" className="home__project__media__image" />
                                </figure>

                                <figure className='home__project__media'>
                                    <img src={seven} alt="" className="home__project__media__image" />
                                </figure>

                                <figure className='home__project__media'>
                                    <img src={eight} alt="" className="home__project__media__image" />
                                </figure>

                                <figure className='home__project__media'>
                                    <img src={one} alt="" className="home__project__media__image" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
