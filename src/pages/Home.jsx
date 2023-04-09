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
                        <div className="home__padding__wrapper">
                            <div className="home__header">
                                <h1 className="home__title">Solutions web de qualité pour renforcer les entreprises.</h1>
                                <div className="home__header__text">Agence web Francaise</div>
                            </div>
                            <div className="home__project">
                                <div className="home__project__wrapper">
                                    <div className="home__project__selected">
                                        <figure className="home__project__image">
                                            {/* <img src={one} alt="project" /> */}
                                        </figure>
                                        <div className="home__project__description">
                                            <div className="home__project__detail">
                                                <div className="home__project__techno">WP</div>
                                                <div className="home__project__year">2022</div>
                                            </div>
                                            <p className="home__project__name">Alpes Bivouac</p>
                                        </div>
                                    </div>
                                    <div className="home__project__selected">
                                        <figure className="home__project__image">
                                            {/* <img src={one} alt="project" /> */}
                                        </figure>
                                        <div className="home__project__description">
                                            <div className="home__project__detail">
                                                <div className="home__project__techno">WP</div>
                                                <div className="home__project__year">2022</div>
                                            </div>
                                            <p className="home__project__name">Alpes Bivouac</p>
                                        </div>
                                    </div>
                                    <div className="home__project__selected">
                                        <figure className="home__project__image">
                                            {/* <img src={one} alt="project" /> */}
                                        </figure>
                                        <div className="home__project__description">
                                            <div className="home__project__detail">
                                                <div className="home__project__techno">WP</div>
                                                <div className="home__project__year">2022</div>
                                            </div>
                                            <p className="home__project__name">Alpes Bivouac</p>
                                        </div>
                                    </div>
                                    <div className="home__project__selected">
                                        <figure className="home__project__image">
                                            {/* <img src={one} alt="project" /> */}
                                        </figure>
                                        <div className="home__project__description">
                                            <div className="home__project__detail">
                                                <div className="home__project__techno">WP</div>
                                                <div className="home__project__year">2022</div>
                                            </div>
                                            <p className="home__project__name">Alpes Bivouac</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home__aim">
                                <div className="home__aim__content">
                                    <div className="home__aim__content__wrapper">
                                        <p className="home__aim__content__text">Nous aidons les entreprises</p>
                                        <p className="home__aim__content__text">en leur fournissant les outils du </p>
                                        <p className="home__aim__content__text">web les mieux adaptés à leurs besoins.</p>
                                    </div>
                                    <Link className='home__agence__link' to='/'>Découvrez notre agence!</Link>
                                </div>
                            </div>
                        </div>
                        <div className="home__service">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
