import React from 'react'
import  '../assets/sass/experience.scss'

function experience() {
    return (
        <div className='exp'>
             <hr />
            <h2 className='experience'>İŞ TƏCRÜBƏSİ</h2>
            <hr />
            <div className='mc'>
                <div>
                    <h3 className='mmc'>Şirkət Adı</h3>
                    <h4 className='mcdon'>EDU Company</h4>
                    <h3 className='mmc'>Vəzifə</h3>
                    <h4>Təhsil Meneceri</h4>
                    
                </div>
                <div className='date'>
                    <h6>06/2018</h6>
                    <h6>08/2018</h6>
                </div>
            </div>
            <hr />
            <div className='hayat'>
                <div>
                    <h3 className='mmc'>Şirkət Adı</h3>
                    <h4>IV İslam Həmrəyliyi Oyunları</h4>
                    <h3 className='mmc'>Vəzifə</h3>
                    <h4>Könüllü</h4>
                    
                </div>
                <div className='date'>
                    <h6>04/2017</h6>
                    <h6>06/2021</h6>
                </div>
            </div>
            
        </div>
    )
}

export default experience