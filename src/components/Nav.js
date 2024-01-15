import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';

function Nav() {

  const [nav, setNav] = useState(false)

  const handleHamburger = () => {
    setNav(!nav)
  }

    return (

      <div className="bg-[#1C1E53] text-white">
        <nav className="max-w-[1240px] w-full mx-auto px-6 py-4 flex justify-between">

          <div className='w-full text-2xl font-bold'>
            <h1 className='w-full text-2xl font-bold'>{`{finsweet`}</h1>
          </div>
          <ul className="hidden md:flex w-full justify-between items-baseline">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About us</Link></li>
              <li><Link to='features'>Features</Link></li>
              <li><Link to='pricing'>Pricing</Link></li>
              <li><Link to='faq'>FAQ</Link></li>
              <li><Link to='blog'>Blog</Link></li>
              <Link to='contact'>
                <button className="bg-transparent border border-white rounded-3xl px-4 py-2 font-medium">Contact Us</button>
              </Link>
          </ul>

          <div onClick={handleHamburger} className="block md:hidden px-6">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          <div className={nav ? 'fixed w-[80%] h-screen left-0 top-0 bg-gray-600 z-10 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <div>
              <h1 className='w-full text-2xl font-bold p-6'>{`{finsweet`}</h1>
            </div>
            <ul className="w-full flex flex-col gap-10 pl-6">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='features'>Features</Link></li>
                <li><Link to='pricing'>Pricing</Link></li>
                <li><Link to='faq'>FAQ</Link></li>
                <li><Link to='blog'>Blog</Link></li>
                <li><Link to='contact'>
                  <button className="bg-[rgb(2,2,32)] border border-white rounded-3xl px-4 py-2 font-medium">Contact Us</button>
                </Link></li>
            </ul>
          </div>

        </nav>
      </div>
    );
  }

  export default Nav;