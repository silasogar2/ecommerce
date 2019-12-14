import React from 'react'
import './style.scss';
import {Link, Router} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = () => (
    <div className="header">
        
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            
        </div>
    </div>
)

export default Header;