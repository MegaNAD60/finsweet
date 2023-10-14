import { useState } from "react";
import { Faqs } from "../cards/Cards";
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";


function Faq(){

    const [expanded, setExpanded] = useState(false)

    const toggleAnswer = id => () => {
        setExpanded(expanded => ({
            ...expanded,
            [id]: !expanded[id]
        }));
    };

    const faqs = Faqs.map(contents => {
        const{id, num, question, answer} = contents;
        return(
            <div key={id}>
                <div onClick={toggleAnswer}>
                    <h3>
                        <span style={{
                            color: 'purple'
                        }}>
                            {num}
                        </span>
                        <span style={{
                            marginLeft: '20px',
                        }}>
                            {question}
                        </span>
                        <span>
                            <FaPlus style={{float: 'right'}} />
                        </span>
                    </h3>
                </div>
                <div style={{
                    display: expanded[id] ? 'block' : 'none'
                }}>
                    <p>{answer}</p>
                </div><hr />
            </div>
        )
    })


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
                {faqs}
            </div>
        </div>
    )
}

export default Faq;