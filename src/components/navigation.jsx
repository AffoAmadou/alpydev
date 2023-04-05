import { Link } from 'react-router-dom'
export default function Navigation() {
    return (
        <>
            <div className="navigation">
                <div className="navigation__wrapper">
                    <div className="navigation__logo__wrapper">
                        {/* <Link to='/'><img className="navigation__logo__image" src={logo} alt="" /></Link> */}
                        <Link to='/'>Home</Link>
                    </div>
                    <div className="navigation__links__wrapper">
                        <ul className="navigation__list">
                            <li className="navigation__list__item">
                                <Link to='/'>Accueil</Link>
                            </li>
                            <li className="navigation__list__item">
                                <Link to='/apropos'>A propos</Link>
                            </li>
                            <li className="navigation__list__item">
                                <Link to='/about'>Realisations</Link>
                            </li>
                            <li className="navigation__list__item">
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}