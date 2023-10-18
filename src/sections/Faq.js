import { useState } from "react";
import { Faqs } from "../cards/Cards";
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";

const ToggleAnswer = ({id, num, question, answer}) => {

    const [expanded, setExpanded] = useState(false);

    return(
        <div key={id}>
            <div onClick={() => setExpanded(!expanded)}>
                <h3>
                    <span style={{color: 'purple'}}>
                        {num}
                    </span>
                    <span style={{marginLeft: '20px'}}>
                        {question}
                    </span>
                    <span>
                        <FaPlus style={{float: 'right'}} />
                    </span>
                </h3>
            </div>
            {expanded && <p>{answer}</p>}<hr />
        </div>

        )

    }


function Faq(){

    return(
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            padding: '50px 150px'
        }}>
            <div>
                <h2>Frequently asked questions</h2>
                <Link to='/contact'>Contant us for more info</Link>
            </div>

            <div>
                {/*question*/}
                {Faqs.map(faq => {
                    return <ToggleAnswer key={faq.id} num={faq.num} question={faq.question} answer={faq.answer} />
                })}
            </div>
        </div>
    )
}

export default Faq;