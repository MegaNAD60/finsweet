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
                <Link to='contact'><Button
                 name='Contact us'
                 style={{
                    padding: '9px 20px',
                    marginLeft: '50px',
                    borderRadius: '20px',
                    border: '1px solid #ffffff',
                    color: '#ffffff',
                    backgroundColor: 'rgb(2, 2, 32)'
                }} /></Link>
            </ul>
          </nav>
      </>
    );
  }

  export default Nav;