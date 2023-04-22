import React, { useRef, useEffect } from 'react';
import GSAP from 'gsap';
export default function svgCircle() {

    const svgRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = GSAP.timeline({ defaults: { duration: 2, ease: 'power2.out' } });

        tl.from(svgRef.current, { y: '2rem', opacity: 0 });
        GSAP.to(svgRef.current, {
            duration: 4,
            rotation: 360,
            repeat: -1,
            ease: 'linear',
            transformOrigin: '50% 50%',
        });
    }, []);


    return (

        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 200 200"
                className="home__header__svg"
                ref={svgRef}
            >
                <circle cx="100" cy="100" r="60" fill="none" stroke="#317A77" strokeWidth="4" />

                <path
                    id="cheminCercle"
                    d="M 100,20 A 80,80 0 0 1 100,180 A 80,80 0 0 1 100,20"
                    fill="none"
                    stroke="transparent"
                />

                <text
                    style={{ stroke: '#000000', fontSize: '3rem', textTransform: 'uppercase' }}
                    fill="black"
                    strokeWidth="0"
                >
                    <textPath xlinkHref="#cheminCercle" startOffset="0%" ref={textRef}>
                        <tspan dy="-2">Contactez nous !</tspan>
                    </textPath>
                </text>
            </svg>
        </>
    );

}
