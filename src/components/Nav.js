import Button from "./Button";
import '../navbar.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <>
          <nav className='navbar'>
            <div className='nav-logo'>finsweet</div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='features'>Features</Link></li>
                <li><Link to='pricing'>Pricing</Link></li>
                <li><Link to='faq'>FAQ</Link></li>
                <li><Link to='blog'>Blog</Link></li>
                <Link to='contact'>
                  <Button
                   name='Contact us'
                   color='#ffffff'
                   backgroundColor='rgb(2, 2, 32)'
                   marginLeft='50px'
                   border='1px solid #ffffff'
                  />
                </Link>
            </ul>
          </nav>
      </>
    );
  }

  export default Nav;