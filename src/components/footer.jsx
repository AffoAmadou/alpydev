import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="home__footer__wrapper" >

                <div className="footer">
                    <div className="footer__wrapper">
                        <div className="footer__content">
                            <div className="footer__social__wrapper">
                                <a href="#" className="linkedin">LN</a>
                                <a href="#" className="instagram">IN</a>
                            </div>
                            <div className="footer__content__wrapper">
                                <div className="contact__page">
                                    <p className="contact__text">Une idée? un Projet?</p>
                                    <Link to='/contact' className="contact__link">Discuton-en!!</Link>
                                </div>
                                <a href="mailto:Contact@alpydev.fr" className="footer__mail__link">Contact@alpydev.fr</a>
                            </div>
                        </div>
                        <div className="footer__agency">
                            <p className="footer__alpy">Alpy</p>
                            <p className="footer__dev">Dev</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}