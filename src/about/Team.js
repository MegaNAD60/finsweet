import React from 'react'
import { Teams } from "../cards/Cards";

const Team = () => {

    const teams = Teams.map(teams => {
        const {id, image, name, position} = teams;
        return(
            <div className="w-full bg-white p-6 text-center mt-4" key={id}>
                <img src={image} alt="/" className='mx-auto' />
                <h3 className="font-medium text-xl my-2">{name}</h3>
                <p>{position}</p>
            </div>
        )
    })

  return (
    <div className='bg-[#f3f1f1]'>
        <div className='max-w-[1240px] mx-auto py-16 px-6'>
            <h2 className='font-medium text-3xl my-4 text-center'>Meet our Team</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {teams}
            </div>
        </div>
    </div>
  )
}

export default Team