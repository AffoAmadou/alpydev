import { Link } from 'react-router-dom'
import Navigation from '../components/navigation'
import { useEffect, useRef } from 'react'
import GSAP from 'gsap'
import vide from '../assets/show.mp4'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//Components
import Card from '../components/projectscard'
import Svgcircle from '../components/svgCircle'
const projects = [
    {
        id: 1,
        image: "image1.jpg",
        tech: "WordPress",
        year: "2022",
        title: "Project 1"
    },
    {
        id: 2,
        image: "image2.jpg",
        tech: "Shopify",
        year: "2021",
        title: "Project 2"
    },
    {
        id: 3,
        image: "image3.jpg",
        tech: "Wix",
        year: "2023",
        title: "Project 3"
    },
    {
        id: 4,
        image: "image4.jpg",
        tech: "Squarespace",
        year: "2020",
        title: "Project 4"
    }
];


export default function Home({ }) {



    const cartesRef = useRef(null);
    const cartesContainerRef = useRef(null);
    const section2Ref = useRef(null);
    const videoRef = useRef(null);
    const line = useRef(null);
    const color = useRef(null);
    const colorTextRef = useRef(null);

    useEffect(() => {

        const carteWidth = cartesRef.current.querySelector('.home__projects__card').offsetWidth;
        const cartesLength = cartesRef.current.querySelectorAll('.home__projects__card').length;
        const cartesContainerWidth = cartesContainerRef.current.offsetWidth;


        GSAP.registerPlugin(ScrollTrigger);

        // Declare the timeline variable
        const tl = GSAP.timeline();

        // Animation for header content
        tl.fromTo(['.home__header__title', '.home__header__subtitle'],
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.5,
                ease: "ease.inOut",
                stagger: 0.2
            }).from(line.current, {
                transformOrigin: 'top',
                height: '0%',
                ease: "ease.inOut",
                duration: 1,
            }, 0.5);

        // Animation for showreel
        //animation should start from the top of the showreel and not the center
        const showreelTl = GSAP.timeline({
            scrollTrigger: {
                trigger: '.home__showreel',
                markers: true,
            }
        });
        showreelTl.from('.home__showreel',
            {
                opacity: 0,
                duration: 1.5,
                ease: "ease.inOut",
                delay: 0.2,
            });

        // // Animation for home__projects
        const projectsTl = GSAP.timeline({
            scrollTrigger: {
                trigger: '.home__projects',
                start: 'top 70%',
                end: 'top 30%',
            }
        });
        // projectsTl.from('.home__projects',
        //     {
        //         backgroundColor: 'white',
        //         duration: 1,
        //         ease: "ease.inOut",

        //     }
        // );

        GSAP.set(cartesRef.current, {
            x: cartesContainerWidth / 2 - carteWidth / 2,
        });

        GSAP.to(cartesRef.current, {
            x: () => -((carteWidth * (cartesLength - 1)) - (cartesContainerWidth / 2) + (carteWidth / 2)),
            scrollTrigger: {
                trigger: section2Ref.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                pin: true,
            },
        });
        // Add the showreel and projects timelines to the main timeline
        tl.add(showreelTl, 0.5).add(projectsTl, 1);

        videoRef.current.play();

        const colorTl = GSAP.timeline({
            scrollTrigger: {
                trigger: color.current,
                start: 'top 60%', // changez cette ligne
                end: 'bottom 50%',
                duration: 1.5,
                ease: "ease.inOut",
            }
        });
        colorTl.from(color.current,
            {
                backgroundColor: 'white',
            }
        ).from(colorTextRef.current,
            {
                y: 100,
                opacity: 0,
                delay: 0.5,
            });

    }, []);

    return (
        <>
            <div className="home">
                <Navigation />
                <div className="home__wrapper">
                    <div className="home__header__wrapper">

                        <div className="home__line" ref={line}></div>

                        <div className="home__header__content">
                            <h1 className="home__header__title">Alpy dev est une Agence web
                                basée à Annecy,<br />
                                France.</h1>
                            <p className="home__header__subtitle">
                                Solutions web de qualité
                                pour renforcer les
                                entreprises.
                            </p>
                        </div>
                        <Link to='/apropos'><Svgcircle /></Link>
                    </div>

                    <div className="home__showreel__container">
                        <div className="home__showreel__wrapper">
                            <video ref={videoRef} className='home__showreel' autoPlay muted loop>
                                <source src={vide} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                    <div className="home__aim">
                        <p className="home__aim__text">
                            Nous aidons les entreprises en leur
                            fournissant les outils du web les
                            mieux adaptés à leurs besoins.
                        </p>
                    </div>

                    <div className="home__section__color" ref={color}>

                        <h2 className="home__selected__project" ref={colorTextRef}>Projets sélectionnés</h2>
                        <div className="home__projects" ref={section2Ref} >
                            <div className="home__projects__container" ref={cartesContainerRef} >
                                <div className="home__project__cards" ref={cartesRef}>
                                    {projects.map((project) => (
                                        <Card key={project.id} project={project} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="home__t">
                            <h1>sdjkvndsvndsi</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
