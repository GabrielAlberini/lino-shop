import React from 'react'
import './NavBar.css'
import logo from '../../lino-logo.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <nav className="NavBar">
            <div className="container-logo">
                <div className="container-logo-content">
                    <Link to='/'><img className="logo-img" src={ logo } alt="logo ecommerce lino"/></Link>
                </div>
            </div>
            <div className="container-list">
                <ul className="container-list-content">
                    <li className="list-option">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="list-option">
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className="list-option">
                        <Link to='/products'>Products</Link>
                    </li>
                    <li className="list-option">
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className="list-option">
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}