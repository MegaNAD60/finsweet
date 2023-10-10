import Button from "../components/Button";

function Header() {
    return (
      <>
          <div>
            <div>
                <h1>Building stellar<br />websites for early<br />startups</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
                    eiusmod tempor incididunt.
                </p>
                <Button name='View our work' />
            </div>
            <img src={require('../images/illustration.png')} alt="graphic" />
          </div>
      </>
    );
  }

  export default Header;