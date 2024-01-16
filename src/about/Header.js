import React from 'react'
import image from '../images/about/group-of-people-sitting-indoors-3184360.png'

const Header = () => {
  return (
    <div>
        <div className='max-w-[1240px] mx-auto py-16 px-6 md:grid md:grid-cols-2 gap-10'>

            <div className='md:w-[80%]'>
                <p>About us</p>
                <h2 className='font-medium text-5xl my-4'>Our designs solve problems</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dalore magna aliqua. Ut enim ad minim veniam
                </p>
            </div>

            <img src={image} alt='/' />

        </div>
    </div>
  )
}

export default Header