import { FaArrowRight } from 'react-icons/fa';
import illustration from '../images/Illustration.png'



function Header() {
    return (
      <div className="bg-[#1C1E53] text-white">
          <div className="max-w-[1240px] mx-auto h-screen md:py-[6rem] py-[4rem] px-6 grid md:grid-cols-2 text-center md:text-left">
            <div className='md:w-[80%]'>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">Building stellar websites for early startups</h1>
                <p className="py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                </p>
                <div className='flex'>
                  <button className="bg-[#FCD980] text-black font-medium py-2 px-5 rounded-3xl">View our Work</button>
                  <p className='pl-4 items-baseline'>View Pricing</p>
                  <span className='p-2 items-baseline'>
                    <FaArrowRight />
                  </span>
                </div>
            </div>
            <img className='w-[500px] mx-auto pt-6' src={illustration} alt="/" />
          </div>
      </div>
    );
  }

  export default Header;