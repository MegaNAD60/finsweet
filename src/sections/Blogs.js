import { BlogContents } from "../cards/BlogContents";

function Blogs(){

    const blogs = BlogContents.map(contents => {
        const {id, date, title, details, image} = contents
        return(
            <div key={id}>
                <img src={image} alt="" />
                <p>{date}</p>
                <h3>{title}</h3>
                <p>{details}</p>
                <p><b>Read more</b></p>
            </div>
        )
    })

    return(
        <div style={{padding: '50px 150px'}}>
            <h2>Our blog</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)'
            }}>
                {blogs}
            </div>
        </div>
    )
}

export default Blogs;