import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


function Footer(){
    return(
        <div className="mt-10">
            <div className="bg-[#1C1E53] text-white">

                <div className="max-w-[1240px] mx-auto pt-10 px-6 md:grid md:grid-cols-2 gap-20">

                    <div className="">

                       <div className="w-[80%]">
                            <h2 className="font-medium text-3xl">finsweet</h2>
                            <p className="my-6">We are always open to discuss your project and improve your online presence.</p>
                        </div>

                        <div className="py-4 px-4 text-black bg-[#FCD980] md:grid md:grid-cols-2 md:gap-20">

                            <div>
                                <h3 className="font-medium md:text-2xl text-xl">Email me at</h3>
                                <p>contact@website.com</p>
                            </div>

                            <div>
                                <h3 className="font-medium md:text-2xl text-xl">Call us</h3>
                                <p>0827 6277 28525</p>
                            </div>

                        </div>

                    </div>

                    <div className="mt-6 md:mt-0">
                        <h2 className="font-medium md:text-3xl sm:text-2xl text-xl">Lets Talk!</h2>
                        <p className="my-6">We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                        <div className="flex gap-10 md:pb-0 pb-4">
                            <FaFacebook size={20} /><FaTwitter size={20} /><FaInstagram size={20} /><FaLinkedin size={20} />
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-[1240px] mx-auto px-6 py-4 md:grid md:grid-cols-2">
                <p>Copyright 2022. Finsweet.com</p>
                <ul className="hidden md:flex gap-4">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                </ul>
            </div>

        </div>

    )
}

export default Footer;