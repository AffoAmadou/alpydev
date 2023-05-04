import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="footer__wrapper" >

                <div className="footer">

                    <hr className='footer__line' />
                    <a href="mailto:Contact@alpydev.fr" className="footer__mail__link">Contact@alpydev.fr</a>
                    <a href="tel:0611341624" className="footer__tel__link">0611341624</a>

                    <div className="footer__menu">

                        <div className="footer__menu__wrapper">
                            <Link className='footer__menu__link' to="Projets">Projets</Link>
                            <Link className='footer__menu__link' to="Apropos"  >A propos</Link>
                            <Link className='footer__menu__link' to="Contact">Contact</Link>
                        </div>

                        <div className="footer__social__wrapper">
                            <a href="#" className="linkedin">LN</a>
                            <a href="#" className="instagram">IN</a>
                        </div>
                    </div>

                    <div className="footer__sub__menu">
                        <Link className='footer__sub__menu__link' to="Mentions">Mentions légales</Link>
                        <p className="copyrigth">ALPYDEV - COPYRIGHT - 2023</p>
                    </div>
                </div>

            </div>
        </>
    )
}