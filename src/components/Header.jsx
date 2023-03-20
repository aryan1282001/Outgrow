import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='Header'>
      <h3>Organics Lab</h3>
      <div className='Main'>
        <h2>This Is Heading Text</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris, turpis interdum massa condimentum mauris amet volutpat.</p>
        <button>Let’s Go Healthy</button>
      </div>
      <img src='./images/header-img.png'/>
    </header>
  )
}

export default Header
