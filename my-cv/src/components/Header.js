import React from 'react'
import rovshanimg from '../assets/img/rovshan.jpg'

function Header() {
    return (

        <div className='photo'>
            <img className='asgerphoto' src={rovshanimg} />
            <h1 className='name'>Rovshan Quliyev</h1>
            <h2 className='job'>Web Developer</h2>
        </div>


    )
}

export default Header