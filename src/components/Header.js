import { useState, useEffect, useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    // useEffect(() => {
    //     console.log('use effect from header');
    // }, [btnName])
    // console.log('header render')


const {loggedInUser} = useContext(UserContext);
// console.log(data)
    
    
    return (
        <div className="header flex justify-between items-center bg-stone-300 rounded-lg mt-5 mx-10 ">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="logo w-16 mx-6 " />
            </div>
            <div className="nav-items">
                <ul className='flex justify-center items-center p-2 m-4'>
                    <li className='px-4'><Link to={'/'}>Home</Link></li>
                    <li className='px-4'><Link to={'/about'}>About Us</Link></li>
                    <li className='px-4'><Link to={'/contact'}>Contact Us</Link></li>
                    <li className='px-4'>Cart</ li>
                    <button className='loginBtn' onClick={() => {
                        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                    }}>{btnName}</button>

                    <div className="px-4 font-bold ">{loggedInUser}</div>
                </ul>
            </div>
        </div>
    );
};

export default Header;
