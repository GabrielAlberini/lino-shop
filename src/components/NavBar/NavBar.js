import React from 'react'
import './NavBar.css'
import logo from '../../lino-logo.jpg'
import CartWidget from '../CartWidget/CartWidget'


export default function NavBar() {
    return (
        <nav className="NavBar">
            <div className="container-logo">
                <div className="container-logo-content">
                    <a href="#"><img className="logo-img" src={ logo } alt="logo ecommerce lino"/>
                    </a>
                </div>
            </div>
            <div className="container-list">
                <ul className="container-list-content">
                    <li className="list-option"><a href="#" className="list-option-link">Home</a></li>
                    <li className="list-option"><a href="#" className="list-option-link">Products</a></li>
                    <li className="list-option"><a href="#" className="list-option-link">Contact</a></li>
                    <li className="list-option"><a href="#" className="list-option-link">About us</a></li>
                    <li className="list-option"><a href="#" className="list-option-link">Login</a></li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}