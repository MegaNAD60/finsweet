import React from 'react'
import image1 from '../images/about/a-man-standing-in-an-office-7792811.png'
import image2 from '../images/about/photo-of-women-at-the-meeting-3810789.png'

const Mission = () => {
  return (
    <div className='bg-[#e4e4e9]'>
        <div className='max-w-[1240px] mx-auto py-16 px-6'>

            <div className='md:grid md:grid-cols-2 gap-10'>

                <div className='w-[80%] mt-10'>
                    <p>Our Mission</p>
                    <h2 className='font-medium text-2xl py-4'>Inspire, Innovate, Share</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dalore magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>

                <img src={image1} alt='' />

            </div>

            <div className='md:grid md:grid-cols-2 gap-10 mt-10'>

                <img src={image2} alt='' />

                <div className='w-[80%] mt-10'>
                    <p>Our Vision</p>
                    <h2 className='font-medium text-2xl py-4'>Laser focus</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dalore magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Mission