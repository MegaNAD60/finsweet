import { useState } from "react";
import { clientsCarousel } from "../cards/Cards";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Clients(){

    const renderCarousel = clientsCarousel.map(contents => {
        const {id, name, post, image, words} = contents
        return(
            <div key={id} style={{
                textAlign: 'left'
            }}>
                <h3>{words}</h3>
                <div style={{
                    display: 'flex',
                    gap: '20px',
                }}>
                    <img src={image} alt="" style={{
                        height: '50px',
                        width: '50px',
                        borderRadius: '50%'
                    }} />
                    <p><b>{name}</b><br />{post}</p>
                </div>
            </div>
        )
    })

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex > 0){
            setCurrentIndex(currentIndex - 1)
        }
    };

    const handelNext = () => {
        if (currentIndex < 2){
            setCurrentIndex(currentIndex + 1)
        }
    };

    return(
        <div style={{
            display: "grid",
            gridTemplateColumns: 'repeat(2, 1fr)',
            padding: '50px 150px'
        }}>
            <div>
                <h2>What our clients say about us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
            </div>
            <div>
                {/*carousel*/}
                <Carousel
                    showArrows={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showIndicators={false}
                    selectItem={currentIndex}
                    showThumbs={false}
                    className='carousel-container'
                >
                    {renderCarousel}
                </Carousel>
                <div style={{
                    float: 'right'
                }}>
                    <button onClick={handlePrev} style={{
                        padding: '5px',
                        margin: '5px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff'
                    }}>
                        {<FaChevronLeft />}
                    </button>
                    <button onClick={handelNext} style={{
                        padding: '5px',
                        margin: '5px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff'
                    }}>
                        {<FaChevronRight />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Clients;