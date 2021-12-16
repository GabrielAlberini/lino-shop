import React from 'react';
import {} from './Layout.css'
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
                <div className='main-container'>
                { children }
                </div>
            <Footer />
        </>
    )
}

export { Layout }