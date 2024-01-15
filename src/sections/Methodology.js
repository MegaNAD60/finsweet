import { Methods } from "../cards/Cards";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

function Methodology(){

    const methodContents = Methods.map(contents => {
        const {id, image, title, description} = contents;
        return(
            <div key={id} className="m-2" >
                <img src={image} alt="" />
                <h3 className="text-2xl font-medium">{title}</h3>
                <p>{description}</p>
            </div>
        )
    }
    )

    return(
        <div className="bg-[#F4F6FC]">
            <div className="max-w-[1240px] w-full mx-auto py-16 px-4 md:grid md:grid-cols-3 gap-10">
                <div className="w-full my-6 text-center md:text-left">
                    <h2 className="text-[2rem] font-medium">How we work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <Link className="flex gap-3 text-[#3146a0]" to='/contact'>
                        <p className="font-medium">Get in touch with us</p>
                        <span className="mt-1"><FaArrowRight /></span>
                    </Link>
                </div>
                <div className="col-span-2 grid grid-cols-2">
                    {methodContents}
                </div>
            </div>
        </div>
    )
}

export default Methodology;