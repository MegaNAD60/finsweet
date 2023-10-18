import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


function Footer(){
    return(
        <>
            <div style={{
                display: "grid",
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '100px',
                padding: '50px 150px',
                backgroundColor: 'blue',
                color: 'white',
            }}>
                <div style={{position: 'relative'}}>
                    <h2>finsweet</h2>
                    <p>We are always open to discuss your project and improve your online presnce</p>
                    <div style={{
                        backgroundColor: 'yellow',
                        color: 'black',
                        padding: '0 30px',
                        display: 'grid',
                        width: '100%',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        position: 'absolute',
                        bottom: '-50px'
                    }}>
                        <div>
                            <h3>Email me at</h3>
                            <p>contact@website.com</p>
                        </div>
                        <div>
                            <h3>Call us</h3>
                            <p>0827 6277 28525</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Lets Talk!</h2>
                    <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                    <div style={{
                        display: 'flex',
                        gap: '20px'
                    }}>
                        <FaFacebook /><FaTwitter /><FaInstagram /><FaLinkedin />
                    </div>
                </div>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                padding: '10px 150px'
            }}>
                <p>Copyright 2022. Finsweet.com</p>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                </ul>
            </div>
        </>
    )
}

export default Footer;