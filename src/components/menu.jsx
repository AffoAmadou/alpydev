import { Link } from 'react-router-dom'
import Menulink from './menulink'
import { useEffect,useRef } from 'react'
import GSAP from 'gsap'
export default function Menu({state, setState}) {
const menu = useRef(null);
    useEffect(() => {
        if (state.clicked === false) {

            //?open menu
            // menu.style.display = "none";
            //? Set menu to display none
            console.log(state);

            GSAP.to(menu.current, {
                duration: 1,
                css: { display: 'none' }
            })
        }
        else if (state.clicked === true || state.clicked === true && state.initial === null) {
            //open menu
            //! menu.style.display = "block";
            console.log(state);
            GSAP.to(menu.current, {
                duration: 0,
                css: { display: 'block' }
            });
           
            // // staggerText(line1, line2, line3, line4);
            // staggerText(line1, line2, line3);
            // staggerReveal(reveal1, reveal2);
            // fadeInUp(info);
        }
    }, [state]);

    const change = () => {
      
        setState({ clicked: !state.clicked});

        console.log(state);
       
        GSAP.to(menu, {
            duration: 2,
            css: { display: 'none' }
        })
        
        console.log(state);

    }
    return (
        <>
            <div className="menu" ref={menu}>
                <div className="menu__wrapper">

                    <div className="linkwrapper">
                        <Menulink index="01" text="Accueil" onClick={change} />
                        <Menulink index="02" text="A propos" onClick={change} />
                        <Menulink index="03" text="Projets" onClick={change} />
                        <Menulink index="04" text="Contact" onClick={change} />
                    </div>

                    <div className="menu__infos">
                        <div className="menu__address">1 Rue du Sentier</div>
                        <a href="mailto:Contact@alpydev.fr" className="menu__mail__link">Contact@alpydev.fr</a>
                        <div className="menu__socials">
                            <a href="#" className="linkedin">LN</a>
                            <a href="#" className="instagram">IN</a>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}