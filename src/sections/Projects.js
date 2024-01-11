import { Link } from 'react-router-dom';
import card from '../images/Card.png'
import rec from '../images/Rectangle.png'

function Projects(){
    return(
        <div  className='bg-white'>
            <div className='max-w-[1240px] w-full mx-auto px-6'>
                <h2 className='text-[2rem] font-medium my-6'>View Our projects</h2>

                <div className='md:grid md:grid-cols-3 gap-10 py-10'>

                    <div className='relative col-span-2'>
                        <img className='' src={card} alt='' />
                        <div className='absolute top-0 w-[50%] h-[100%] bg-gradient-to-br from-[#13153db3] to-[#13153d] text-white'>
                            <div className='mt-[50%] md:mt-[80%] p-2'>
                                <h3 className='font-medium'>Workhub office Webflow Webflow Design</h3>
                                <p className='py-4 text-sm'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
                                <p className='text-[#e48647] font-medium'><Link>View project</Link></p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='relative my-4 md:my-0'>
                            <img src={rec} alt='' />
                            <div className='absolute bg-gradient-to-br from-[#13153db3] to-[#13153d] text-white top-0 w-full h-[100%]'>
                                <div className='mx-4 mt-[40%]'>
                                    <h3 className='font-medium'>Unisaas website Design</h3>
                                    <p className='text-[#e48647] font-medium'><Link>View portfolio</Link></p>
                                </div>
                            </div>
                        </div>
                        <img className='mx-auto' src={require('../images/Card_2.png')} alt='' />
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Projects;