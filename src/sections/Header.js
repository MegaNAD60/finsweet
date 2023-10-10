import Button from "../components/Button";


function Header() {
    return (
      <>
          <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                padding: '50px 150px',
                color: '#ffffff',
                backgroundColor: 'rgb(2, 2, 32)',}}>
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
                <span style={{marginLeft:'30px'}}>View Pricing</span>
            </div>
            <img src={require('../images/Illustration.png')} alt="graphic" />
          </div>
      </>
    );
  }

  export default Header;