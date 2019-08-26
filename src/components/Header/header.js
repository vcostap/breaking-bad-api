import React from 'react';

import logo from '../../assets/logo.png';

import './header.css';

const Header = () => {
    return (
        <div className='container-principal'>
            <header>
                <img src={logo} alt="Breaking Bad logo"/>
                <input 
                    type="search"
                    placeholder="Pesquise os personagens"
                    /* onChange = {} */
                />
            </header>
        </div> 
    );
}

export default Header;