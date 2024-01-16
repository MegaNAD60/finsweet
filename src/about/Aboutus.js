import React from 'react'
import image from '../images/about/man-in-blue-jacket-looking-at-white-board-7413916.png'

const Aboutus = () => {
  return (
    <div className=''>
        <div className='max-w-[1240px] mx-auto py-16 px-6'>

            <div className='md:grid md:grid-cols-2 gap-12 py-10 px-6 bg-[#f0efef]'>

                <div>
                    <p>Who we are</p>
                    <h2 className='font-medium text-3xl'>Goal focussed</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dalore magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>

                <div className='mt-6'>
                    <h2 className='font-medium text-3xl'>Continuous improvement</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dalore magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>

            </div>

            <img src={image} alt='/' className='' />

        </div>


    </div>
  )
}

export default Aboutus