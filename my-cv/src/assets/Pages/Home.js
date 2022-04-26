import React from 'react'
import Education from '../../components/Education'
import Header from '../../components/Header'
import HeaderRight from '../../components/HeaderRight'
import Info from '../../components/Info'
import Skill from '../../components/Skill'
import Experience from '../../components/Experience'


function Home() {
  return (
    <div className="container mt-3">
    <div className='row'>
      <div className='col-4 gree'>
      <Header/>
      <Info/>
      
      <Skill/>
     
      
      </div>
      <div className='col-8'>
    <HeaderRight/>
    <Education/>
    <Experience/>
   
      </div>
    </div>
    
  
  </div>
  )
}

export default Home