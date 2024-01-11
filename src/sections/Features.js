import { FeatureContents } from "../cards/Cards";

function Features(){

    const featureContents = FeatureContents.map(contents => {
        const {id, image, title, description} = contents;
        return(
            <div className="bg-white p-4 my-4 md:my-0" key={id}>
                <img src={image} alt="" />
                <h3 className="font-medium my-2">{title}</h3>
                <p>{description}</p>
            </div>
        )
    })

    return(
        <div className="py-6">

            <div className="max-w-[1240px] w-full mx-auto px-6">

                <div className="text-center">
                    <p>Features</p>
                    <h2 className="md:w-[60%] w-[80%] mx-auto font-bold md:text-3xl sm:text-2xl text-xl my-4">Design that solves problems, one product at a time</h2>
                </div>

                <div className="md:grid md:grid-cols-3 gap-10">
                    {featureContents}
                </div>

            </div>

        </div>
    )
}

export default Features;