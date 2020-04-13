import React from 'react'
import './style/logo.scss'

import logo from '../assets/images/logo.png'
export default function Logo() {
    return (
        <div className='logo-container'>
            <img src={logo} alt="logo" className='logo-img'/>
        </div>
    )
}
