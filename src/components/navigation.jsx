import { Link } from 'react-router-dom'
import logo from '../assets/alpy.png'
import Menu from './menu'
import { useState } from 'react'
export default function Navigation() {

    const [state, setState] = useState({
        initial: false,
        clicked: null,
    })

    const [disabled, setDisabled] = useState(false);

    const handleMenu = () => {

        disableMenu();
        console.log(disabled)
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
            });

        }
        else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
            });
        }
        else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
            });
        }
    }

    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1400);
    }
    return (


        <>
            <div className="navigation">
                <div className="navigation__wrapper">
                    <div className="navigation__logo__wrapper">
                        <Link to='/'><img className="navigation__logo__image" src={logo} alt="" /></Link>
                    </div>
                    <div className="navigation__links__wrapper">

                        <button onClick={handleMenu} disabled={disabled}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46.412" height="30.614" viewBox="0 0 46.412 30.614">
                                <path id="Icon_ionic-md-menu" data-name="Icon ionic-md-menu" d="M13.725,39.614H48.662V34.936H13.725v4.678ZM4.5,27.049H46.1V21.892H4.5ZM10.857,9v5.157H50.912V9Z" transform="translate(-4.5 -9)" />
                            </svg>
                        </button>
                    </div>
                </div>
                <Menu state={state} setState={setState} />
            </div>
        </>
    )

}