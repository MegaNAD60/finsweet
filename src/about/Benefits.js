import React from 'react'
import { benefitContents } from "../cards/Cards";

const Benefits = () => {

    const contents = benefitContents.map(contents => {
        const {id, image, title, description} = contents;
        return(
            <div className="bg-[#f3f1f1] p-6 my-4 md:my-0" key={id}>
                <img src={image} alt="" />
                <h3 className="font-medium text-2xl my-4">{title}</h3>
                <p>{description}</p>
            </div>
        )
    })

  return (
    <div>
        <div className='max-w-[1240px] mx-auto py-16 px-6'>
            <h2 className='font-medium text-3xl text-center'>The benefits of working with us</h2>
            <div className='md:grid md:grid-cols-3 gap-10 mt-4'>
                {contents}
            </div>
            <div className='flex gap-4 mt-6'>

                <div>
                    <h2 className='font-medium text-2xl'>100.000+</h2>
                    <p>Finsweet Users</p>
                </div>
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />
                <img src='' alt='' />

            </div>
        </div>
    </div>
  )
}

export default Benefits