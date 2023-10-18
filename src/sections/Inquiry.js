import Button from '../components/Button';
import Input from '../components/Input';

function Inquiry(){
    return(
        <div style={{
            padding: '50px 150px',
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                backgroundColor: 'blue',
            }}>
                <div style={{position:'relative'}}>
                    <img src={require('../images/web/woman-writing-on-paper-3228878.png')} alt='' style={{
                        backgroundColor: 'rgba(0,0,0,0.9)'
                    }} />
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '10px',
                        color: '#ffffff'
                    }}>
                        <h2>Building stellar websites for early startups</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </div>
                <div style={{color: '#ffffff'}}>
                    <h2>Send Inquiry</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                    <form>
                        <label for='name'>
                            <Input name='name' id='name' placeholder='Your Name' />
                        </label><br /><br />
                        <label for='email'>
                            <Input name='email' id='email' placeholder='Email' />
                        </label><br /><br />
                        <label for='figma'>
                            <Input name='figma' id='figma' placeholder='Paste your Figma design URL' />
                        </label><br /><br />
                        <Button name='Send an Inquiry' />
                        <p>Get in touch with us</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Inquiry;