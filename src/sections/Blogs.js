import { BlogContents } from "../cards/BlogContents";

function Blogs(){

    const blogs = BlogContents.map(contents => {
        const {id, date, title, details, image} = contents
        return(
            <div className="pt-10 md:pt-0" key={id}>
                <img src={image} alt="" />
                <p>{date}</p>
                <h3>{title}</h3>
                <p>{details}</p>
                <p><b>Read more</b></p>
            </div>
        )
    })

    return(
        <div className="">
            <div className="max-w-[1240px] px-6 mx-auto">
                <h2 className="font-medium text-4xl py-8">Our blog</h2>
                <div className="md:grid md:grid-cols-3 gap-10">
                    {blogs}
                </div>
            </div>
        </div>
    )
}

export default Blogs;