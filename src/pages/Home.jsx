import { Link } from 'react-router-dom'
import Navigation from '../components/navigation'
import { useEffect, useRef } from 'react'

import vide from '../assets/show.mp4'


export default function Home({ }) {

    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);
    return (
        <>
            <div className="home">
                <Navigation />
                <div className="home__wrapper">
                    <div className="home__header__wrapper">
                        <div className="home__header__content">
                            <h1 className="home__header__title">Alpy dev est une Agence web
                                basée à Annecy,<br />
                                France.</h1>

                            <div className="home__header__subtitle">
                                Solutions web de qualité
                                pour renforcer les
                                entreprises.
                            </div>
                        </div>
                    </div>
                    <div className="home__showreel__container">
                        <video ref={videoRef} className='home__showreel' autoPlay muted loop>
                            <source src={vide} type='video/mp4' />
                        </video>
                    </div>
                </div>
            </div>
        </>
    )

}
