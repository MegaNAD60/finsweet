import { FeatureContents } from "../cards/Cards";

function Features(){

    const featureContents = FeatureContents.map(contents => {
        const {id, image, title, description} = contents;
        return(
            <div key={id} style={{
                backgroundColor: '#ffffff',
                padding: '10px',
            }}>
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        )
    })

    return(
        <div style={{
            padding: '50px 150px',
            backgroundColor: '#D9D9D9'
        }}>
            <div style={{
                textAlign: 'center',
            }}>
                <p>Features</p>
                <h2>Design that solves<br /> problems, one product at<br /> a time</h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px'
            }}>
                {featureContents}
            </div>
        </div>
    )
}

export default Features;