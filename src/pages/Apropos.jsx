import { useRef } from 'react';
import headerImage from '../assets/header.png';
import quentin from '../assets/man.png';
import Projects from '../components/selectedprojectcs';
export default function Apropos({ }) {
    const lineref = useRef(null);
    return (
        <>
            <div className="apropos">
                <div className="apropos__wrapper">
                    <div className="apropos__header__wrapper">
                        <div className="apropos__line" ref={lineref}></div>

                        <div className="apropos__header__content">
                            <h1 className="apropos__header__title">Partagez vos idées, nous
                                les concrétisons.</h1>
                            <p className="apropos__header__subtitle">
                                Contactez-nous dès maintenant
                                pour donner vie à vos projets
                                avec notre agence digitale.
                            </p>
                        </div>
                    </div>
                    <div className="apropos__image__container">
                        <figure className="apropos__header__media">
                            <img className='apropos__header__media__image' src={headerImage} alt="" />
                        </figure>
                    </div>
                    <div className="apropos__aim">
                        {/* <p className="apropos__aim__text" >
                            Nous aidons les entreprises en leur
                            fournissant les outils du web les
                            mieux adaptés à leurs besoins.
                        </p> */}

                        <div className="apropos__aim__wrapper">
                            <h2 className="apropos__aim__title">Notre mission</h2>
                            <p className="apropos__aim__text">
                                Notre mission en tant qu’agence digitale est d’aider nos clients
                                à réussir dans l’environnement numérique en constante évolution.
                                Nous sommes déterminés à fournir des solutions innovantes et
                                personnalisées pour répondre aux besoins spécifiques de chaque
                                entreprise que nous servons.
                            </p>
                            <div className="apropos__collab">
                                logo partenaires
                            </div>
                        </div>
                    </div>
                    <div className="apropos__ceo">
                        <div className="apropos__ceo__wrapper">
                            <h2 className="apropos__ceo__title">Les fondateurs</h2>
                        </div>

                        <div className="apropos__ceo__container">
                            <div className="apropos__ceo__card">
                                <div className="apropos__ceo__card__wrapper">
                                    <h3 className="apropos__ceo__card__title">Quentin Hourriez</h3>
                                    <p className="apropos__ceo__card__text">
                                        Notre mission en tant qu’agence digitale est d’aider nos
                                        clients à réussir dans l’environnement numérique en
                                        constante évolution.
                                    </p>
                                </div>
                            </div>

                            <figure className="apropos__media">
                                <img className='apropos__media__image' src={quentin} alt="" />
                            </figure>

                        </div>

                    </div>
                    <Projects />
                </div>


            </div>
        </>
    )
}