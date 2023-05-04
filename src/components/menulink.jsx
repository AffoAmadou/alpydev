import { Link } from 'react-router-dom'
import GSAP from 'gsap'
import { useEffect, useRef } from 'react'

export default function Menulink(props) {
   

    return (
        <>
            <div className="linkContainer">
                <p className="index">{props.index}</p>
                <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref={linkref} to={"/" + props.text.replace(/\s+/g, '')}>{props.text}</Link>
            </div>
        </>
    )
}


//remove space in props.text
// const text = ;