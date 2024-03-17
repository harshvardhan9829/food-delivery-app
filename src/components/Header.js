import { useState , useEffect} from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    useEffect(() => {
      console.log('use effect from header');
    },[btnName] )
    console.log('header render')
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='loginBtn' onClick={() => {
                        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
