import { useEffect, useRef, useContext } from "react"
import GSAP from "gsap"
import Card from '../components/projectscard'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import alpy from '../assets/alpy.png'
import { ProjectContext } from '../context/contex';

export default function SelectedProject({ }) {
    const { projects } = useContext(ProjectContext);

    console.log(projects)
    const projectss = [
        {
            id: 1,
            image: "image1.jpg",
            tech: "WordPress",
            year: "2022",
            title: "Experience",
            text: "Alpy dev est une société qui puise sa force dans l’expérience et la variété de ses réalisations, toujours en quête d’innovation et prête à relever de nouveaux défis.",
        },
        {
            id: 2,
            image: "image2.jpg",
            tech: "Shopify",
            year: "2021",
            title: "Expertise",
            text: "L’expertise d’Alpy repose sur une équipe qualifiée et passionnée, maîtrisant les dernières technologies du web.Ils proposent des solutions adaptées aux besoins des clients, alliant design captivant, développement sur mesure et stratégies marketing efficaces pour garantir la réussite de votre projet en ligne.",
        },
        {
            id: 3,
            image: "image3.jpg",
            tech: "Wix",
            year: "2023",
            title: "Engagement",
            text: "L’engagement d’Alpy se manifeste par une approche axée sur la satisfaction client, l’écoute attentive des besoins et la recherche de solutions sur mesure. La qualité, la réactivité et la communication transparente sont au cœur de leur démarche pour instaurer la confiance et garantir des résultats conformes aux attentes.",
        },
        {
            id: 4,
            image: "image4.jpg",
            tech: "Squarespace",
            year: "2020",
            title: "éthique",
            text: "L’éthique est essentielle pour Alpy, qui respecte des normes d’intégrité, de transparence et de respect envers clients, partenaires et employés. La société privilégie la satisfaction du client et prend des décisions responsables et durables, contribuant au bien-être de tous."
        }
    ];
    const cartesRef = useRef(null);
    const cartesContainerRef = useRef(null);
    const section2Ref = useRef(null);

    useEffect(() => {
        GSAP.registerPlugin(ScrollTrigger);

        const carteWidth = cartesRef.current.querySelector('.home__projects__card').offsetWidth;
        const cartesLength = cartesRef.current.querySelectorAll('.home__projects__card').length;
        const cartesContainerWidth = cartesContainerRef.current.offsetWidth;

        GSAP.set(cartesRef.current, {
            x: cartesContainerWidth / 2 - carteWidth / 2,
        });

        GSAP.to(cartesRef.current, {
            x: () => -((carteWidth * (cartesLength - 1)) - (cartesContainerWidth / 2) + (carteWidth / 2)),
            scrollTrigger: {
                trigger: section2Ref.current,
                start: 'top top',
                scrub: 1,
                pin: true,
            },
        });
    }, [])
    return (
        <>
            <div className="home__quatre" ref={section2Ref} >
                <div className="home__projects__container" ref={cartesContainerRef} >
                    <div className="home__project__cards" ref={cartesRef}>
                        {projectss.map((project) => (
                            <Card key={project.id} project={project} />
                        ))}
                    </div>
                </div>
                {/* <div className="quatre__wrapper" >
                    {projects.map((project, index) => (

                        <figure className="quatre__media" key={index} >
                            <img className='quatre__media__image' src={project.hero_image} alt={project.title} />
                        </figure>

                    ))
                    }
                </div> */}
            </div>
        </>
    )
}