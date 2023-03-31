import { Link } from 'react-router-dom'
import Navigation from '../components/navigation'
import ohimg from '../assets/ohi.png'
export default function Portfolio() {
    return (
        <>
            <div className="home">
                <Navigation />
                <div className="home__container">
                    <div className="home__container__text">
                        <h1 className="home__container__text__title">Studio Freight PORTFOLIO</h1>
                        <p className="home__container__text__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        <div className="fig">

                            <figure>
                                <img  className="of" src="https://picsum.photos/200/300" alt="" />
                            </figure>
                            <figure>
                                <img  className="of" src="https://picsum.photos/200/300" alt="" />
                            </figure>
                            <figure>
                                <img className="of"  src="https://picsum.photos/200/300" alt="" />
                            </figure>
                            <figure>
                                <img className="of"  src="https://picsum.photos/200/300" alt="" />
                            </figure>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}