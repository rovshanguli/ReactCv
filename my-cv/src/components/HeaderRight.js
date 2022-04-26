import React from 'react'
import '../assets/sass/headerright.scss'

function HeaderRight() {
    return (
        <div className='col-8 right'>
            <h1 className='language'>Xarici Dil</h1>
            <div className='lang'>
                <div>
                <h3 className='rus'>Turk Dili:</h3>
                </div>
                <div>
                <i class="far fa-circle red"></i><i class="far fa-circle red"></i><i class="far fa-circle red"></i><i class="far fa-circle red"></i><i class="far fa-circle"></i>
                </div>
            </div>
            <div className='lang'>
                <div>

                <h3 className='english'>Ingilis Dili:</h3>
                </div>
                <div>
                <i class="far fa-circle red"></i><i class="far fa-circle red"></i><i class="far fa-circle red"></i><i class="far fa-circle"></i><i class="far fa-circle"></i>
                </div>
            </div>
           
        </div>
    )
}

export default HeaderRight