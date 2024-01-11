import Input from '../components/Input';
import write from '../images/web/woman-writing-on-paper-3228878.png'

function Inquiry(){
    return(
        <div className='max-w-[1240px] py-16 px-6 mx-auto'>
            <div className='md:grid md:grid-cols-2 bg-[#13153d]'>

                <div className='relative'>
                    <img className='' src={write} alt=''/>

                    <div className='absolute top-0 left-0 w-full h-[100%] bg-[rgba(0,0,0,0.6)]'></div>

                    <div className='absolute top-0 left-6 pt-10 w-[80%] text-white'>
                        <h2 className='font-medium md:text-5xl sm:text-4xl text-3xl'>Building stellar websites for early startups</h2>
                        <p className='pt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>

                </div>

                <div className='text-white w-[80%] mx-auto pt-10'>
                    <h2 className='font-medium text-3xl'>Send Inquiry</h2>
                    <p className='my-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <form className=''>
                        <label htmlFor='name'>
                            <Input name='name' id='name' placeholder='Your Name' />
                        </label><br /><br />
                        <label htmlFor='email'>
                            <Input name='email' id='email' placeholder='Email' />
                        </label><br /><br />
                        <label htmlFor='figma'>
                            <Input name='figma' id='figma' placeholder='Paste your Figma design URL' />
                        </label><br /><br />
                        <button className='bg-[#d8b33b] text-black font-medium py-3 w-full rounded-3xl'>Send an Inquiry</button>
                        <p className='pt-3 text-center'>Get in touch with us</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Inquiry;