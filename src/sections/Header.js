import Button from "../components/Button";
import { FaArrowRight } from 'react-icons/fa';



function Header() {
    return (
      <>
          <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                padding: '50px 150px',
                color: '#ffffff',
                backgroundColor: '#1C1E53',}}>
            <div>
                <h1>Building stellar<br />websites for early<br />startups</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
                    eiusmod tempor incididunt.
                </p>
                <Button
                 name='View our work'
                 color='000000'
                 backgroundColor='yellow'
                 border='1px solid yellow'
                />
                <span style={{marginLeft:'30px', alignItems: 'baseline'}}>View Pricing<FaArrowRight style={{marginLeft:'20px'}} /></span>
            </div>
            <img src={require('../images/Illustration.png')} alt="graphic" />
          </div>
      </>
    );
  }

  export default Header;