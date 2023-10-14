import { Methods } from "../cards/Cards";
import { Link } from 'react-router-dom';

function Methodology(){

    const methodContents = Methods.map(contents => {
        const {id, image, title, description} = contents;
        return(
            <div key={ id } >
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        )
    }
    )

    return(
        <>
            <div
             style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                backgroundColor: 'lightblue',
                padding: '50px 150px'
             }}>
                <div>
                    <h2>How we work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor.</p>
                    <p><Link to='/contact'>Get in touch with us</Link></p>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                    {methodContents}
                </div>
            </div>
        </>
    )
}

export default Methodology;