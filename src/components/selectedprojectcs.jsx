import { useEffect , useRef} from "react"
import GSAP from "gsap"
import Card from '../components/projectscard'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SelectedProject({ }) {
    const projects = [
        {
            id: 1,
            image: "image1.jpg",
            tech: "WordPress",
            year: "2022",
            title: "MY cham"
        },
        {
            id: 2,
            image: "image2.jpg",
            tech: "Shopify",
            year: "2021",
            title: "chanvita"
        },
        {
            id: 3,
            image: "image3.jpg",
            tech: "Wix",
            year: "2023",
            title: "alpes bivouac"
        },
        {
            id: 4,
            image: "image4.jpg",
            tech: "Squarespace",
            year: "2020",
            title: "Aux bureaux"
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
            <div className="home__projects" ref={section2Ref} >
                <div className="home__projects__container" ref={cartesContainerRef} >
                    <div className="home__project__cards" ref={cartesRef}>
                        {projects.map((project) => (
                            <Card key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}