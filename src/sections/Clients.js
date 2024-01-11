import { useState } from "react";
import { clientsCarousel } from "../cards/Cards";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Clients(){

    const renderCarousel = clientsCarousel.map(contents => {
        const {id, name, post, image, words} = contents
        return(
            <div className="text-left" key={id}>
                <h3>{words}</h3>
                <div className="flex">
                    <img className="w-10 h-10 rounded-full" src={image} alt="" />
                    <p className="pl-2"><b>{name}</b><br />{post}</p>
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
        <div className="bg-[#D9D9D9]">
            <div className="max-w-[1240px] w-full mx-auto px-6 py-10 md:grid md:grid-cols-3 gap-10">
                <div className="w-[80%]">
                    <h2 className="text-2xl font-medium">What our clients say about us</h2>
                    <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                <div className="col-span-2 md:w-[80%] mt-8 md:mt-0">
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
                        <button className="p-2 m-2 bg-white rounded-full" onClick={handlePrev}>
                            {<FaChevronLeft />}
                        </button>
                        <button className="p-2 m-2 bg-white rounded-full" onClick={handelNext}>
                            {<FaChevronRight />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients;