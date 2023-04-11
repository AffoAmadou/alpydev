import one from '../assets/one.png'
import two from '../assets/six.png'
import three from '../assets/five.png'
import four from '../assets/four.png'
export default function card(props) {
    let img;
    console.log(props.project.id)
    switch (props.project.id) {
        case 1:
            img = one
            console.log(img)
            break;
        case 2:
            img = two
            break;
        case 3:
            img = three
            break;
        case 4:
            img = four
            break;
        default:
            img = one
    }
    return (

        <>
            <div className="home__projects__card">
                <p className="home__projects__index">0{props.project.id}</p>
                <figure className="home__projects__media">
                    <img src={img} alt="" className="home__projects__media__image" />
                </figure>
                <hr />
                <div className="home__projects__content">
                    <div className="home__projects__details">
                        <p className="home__projects__tech">{props.project.tech}</p>
                        <p className="home__projects__year">{props.project.year}</p>
                    </div>
                    <p className="home__projects__content__title">{props.project.title}</p>
                </div>
            </div>
        </>
    )

}