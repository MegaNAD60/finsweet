import { useState } from "react";
import { Faqs } from "../cards/Cards";
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";

const ToggleAnswer = ({id, num, question, answer}) => {

    const [expanded, setExpanded] = useState(false);

    return(
        <div key={id}>
            <div className="flex justify-between py-4" onClick={() => setExpanded(!expanded)}>
                <h3>
                    <span className="text-[purple]">
                        {num}
                    </span>
                    <span className="ml-2">
                        {question}
                    </span>
                </h3>
                <span>
                    <FaPlus />
                </span>
            </div>
            {expanded && <p>{answer}</p>}<hr />
        </div>

        )

    }


function Faq(){

    return(
        <div className="bg-white py-16">
            <div className="max-w-[1240px] md:grid md:grid-cols-3 mx-auto px-6">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="font-medium text-2xl">Frequently asked questions</h2>
                    <p className="text-blue-600"><Link to='/contact'>Contant us for more info</Link></p>
                </div>

                <div className="col-span-2">
                    {/*question*/}
                    {Faqs.map(faq => {
                        return <ToggleAnswer key={faq.id} num={faq.num} question={faq.question} answer={faq.answer} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Faq;