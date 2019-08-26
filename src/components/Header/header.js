import React from 'react';

import logo from '../../assets/logo.png';

import './header.css';

export default function Header({ searchChange }){
    return (
        <div className='container-principal'>
            <header>
                <img src={logo} alt="Breaking Bad logo"/>
                <input 
                    type="search"
                    placeholder="Pesquise os personagens"
                    onChange = {searchChange}
                />
            </header>
        </div> 
    );
}