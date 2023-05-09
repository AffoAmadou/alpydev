import one from '../assets/one.png'
import two from '../assets/six.png'
import three from '../assets/five.png'
import four from '../assets/four.png'
export default function card(props) {
    let img;
    let col;
    // console.log(props.project.id)
    // switch (props.project.id) {
    //     case 1:
    //         img = one
    //         col = "#BF954D"
    //         console.log(img)
    //         break;
    //     case 2:
    //         img = two
    //         col = "#919B0A"
    //         break;
    //     case 3:
    //         img = three
    //         col = "#515F84"
    //         break;
    //     case 4:
    //         img = four
    //         col = "#BF954D"
    //         break;
    //     default:
    //         img = one
    // }
    return (
        // style={{ backgroundColor: col }}
        <>
            <div className="home__projects__card" >

                <h2 className="quatre__title">
                    {props.project.title}
                </h2>

                <p className="quatre__text">
                    {props.project.text}
                </p>
                {/* <figure className="home__projects__media">
                    <img src={img} alt="" className="home__projects__media__image" />
                </figure>

                <p className="home__projects__content__title">{props.project.title}</p>
                <div className="home__projects__details__content">
                    <p className="home__projects__tech">{props.project.tech}</p>
                    <p className="home__projects__year">{props.project.year}</p>
                    <p className="home__projects__index">0.{props.project.id}</p>
                </div> */}
            </div>
        </>
    )

}