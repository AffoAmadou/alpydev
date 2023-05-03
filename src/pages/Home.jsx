import { Link } from 'react-router-dom'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Menu from '../components/menu'
import { useEffect, useRef } from 'react'
import GSAP from 'gsap'
import vide from '../assets/show.mp4'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//Components
import Svgcircle from '../components/svgCircle'
import Projects from '../components/selectedprojectcs'


export default function Home({ }) {
   
    const videoRef = useRef(null);
    const line = useRef(null);
    const colorref = useRef(null);
    const colorTextRef = useRef(null);
    const aimref = useRef(null);
    const aimref2 = useRef(null);
    const aimref3 = useRef(null);
    const aimref4 = useRef(null);

    useEffect(() => {

        // const carteWidth = cartesRef.current.querySelector('.home__projects__card').offsetWidth;
        // const cartesLength = cartesRef.current.querySelectorAll('.home__projects__card').length;
        // const cartesContainerWidth = cartesContainerRef.current.offsetWidth;


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


        // GSAP.set(cartesRef.current, {
        //     x: cartesContainerWidth / 2 - carteWidth / 2,
        // });

        // GSAP.to(cartesRef.current, {
        //     x: () => -((carteWidth * (cartesLength - 1)) - (cartesContainerWidth / 2) + (carteWidth / 2)),
        //     scrollTrigger: {
        //         trigger: section2Ref.current,
        //         start: 'top top',
        //         scrub: 1,
        //         pin: true,
        //     },
        // });
        // Add the showreel and projects timelines to the main timeline
        tl.add(showreelTl, 0.5).add(projectsTl, 1);

        videoRef.current.play();

        const colorTl = GSAP.timeline({
            scrollTrigger: {
                trigger: colorref.current,
                start: '10% 90%',
                duration: 1,
                onEnter: () => colorTl.play(),
                onLeaveBack: () => colorTl.reverse(),
            },
        });

        const body = document.querySelector('body');
        colorTl.to(body, {
            backgroundColor: '#317A77',
            ease: 'ease.inOut',
        }).to(aimref.current, {
            color: '#EEE3AB',
            ease: 'ease.inOut',
            duration: .2
        }, 0)






        GSAP.to(colorTextRef.current, {
            scale: 0.7,
            y: -50, // Ajoutez cette ligne pour déplacer le texte vers le haut
            transformOrigin: "center center",
            ease: "ease.inOut",
            scrollTrigger: {
                trigger: colorTextRef.current,
                start: "top 40%",
                end: "bottom 30%",
                scrub: true,
                markers: true,
                // pin: true,
            },
        });

        GSAP.from(aimref.current, {
            opacity: 0,
            y: 100,
            duration: 1.5,
            ease: "ease.inOut",
            scrollTrigger: {
                trigger: aimref.current,
                start: 'top 80%',
                end: 'bottom 50%',
            },
        });

        GSAP.from(aimref2.current, {
            opacity: 0,
            y: 100,
            duration: 1.5,
            ease: "ease.inOut",
            scrollTrigger: {
                trigger: aimref2.current,
                start: 'top 80%',
                end: 'bottom 50%',

            },
        });

        // GSAP.from(aimref3.current, {
        //     opacity: 0,
        //     y: 100,
        //     duration: 1.5,
        //     ease: "ease.inOut",
        //     scrollTrigger: {
        //         trigger: aimref3.current,
        //         start: 'top 80%',
        //         end: 'bottom 50%',

        //     },
        // });

        GSAP.from(aimref4.current, {
            opacity: 0,
            y: 100,
            duration: 1.5,
            ease: "ease.inOut",
            scrollTrigger: {
                trigger: aimref4.current,
                start: 'top 80%',
                end: 'bottom 50%',

            },
        });

    }, []);

    return (
        <>
            <div className="home">
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
                        <p className="home__aim__text" ref={aimref}>
                            Nous aidons les entreprises en leur
                            fournissant les outils du web les
                            mieux adaptés à leurs besoins.
                        </p>
                    </div>

                    <div className="home__section__color" ref={colorref}>
                        <div className="home__selected__project__container">
                            <h2 className="home__selected__project" ref={colorTextRef}><span> Études </span>
                                cas clients</h2>
                        </div>

                        <div className="home__sentence__wrapper">
                            <p className="home__first__sentence" ref={aimref2}>
                                Nous prenons en charge chaque client de manière personnalisée en comprenant ses besoins et en évaluant ses objectifs à court et à long terme.
                            </p>

                            <div className="home__three__net" ref={aimref3}></div>


                            <p className='home__second__sentence' ref={aimref4}>Nous travaillons en étroite collaboration avec nos clients pour créer une stratégie web qui leur convient le mieux.</p>
                        </div>

                        <div className="home__all__project__link">
                            <Link to='/projets' className="home__all__project">Decouvrez les tous</Link>

                            <p>*</p>
                        </div>


                        {/* <div className="home__projects" ref={section2Ref} >
                            <div className="home__projects__container" ref={cartesContainerRef} >
                                <div className="home__project__cards" ref={cartesRef}>
                                    {projects.map((project) => (
                                        <Card key={project.id} project={project} />
                                    ))}
                                </div>
                            </div>
                        </div> */}

                        <div className="home__proj">
<Projects />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
