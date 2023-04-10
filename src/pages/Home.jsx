import { Link } from 'react-router-dom'
import Navigation from '../components/navigation'
import { useEffect, useRef } from 'react'
import GSAP from 'gsap'
import vide from '../assets/show.mp4'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


export default function Home({ }) {

    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            GSAP.registerPlugin(ScrollTrigger);

            GSAP.fromTo(['.home__header__title', '.home__header__subtitle'], 
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.5,
                    ease: "cubic-bezier(0.77, 0, 0.175, 1)",
                    stagger: 0.2
                });


            const tl = GSAP.timeline({
                scrollTrigger: {
                    trigger: '.home__showreel',
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: 1,
                }
            });
            tl.fromTo('.home__showreel', { scale: 0.5 },
                {
                    scale: 1,
                    duration: 1.5,
                    ease: "cubic-bezier(0.77, 0, 0.175, 1)"
                });
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
                    <div className="home__aim">
                        <p className="home__aim__text">
                            Nous aidons les entreprises en leur
                            fournissant les outils du web les
                            mieux adaptés à leurs besoins.
                        </p>
                    </div>
                    <div className="home__projects">

                    </div>
                </div>
            </div>
        </>
    )

}
