import React from 'react'
import '../styles/MainContainer.css'
import Header from '../components/Header';
import Result from '../components/Result';
import Footer from '../components/Footer';
import Aside from '../components/Aside';


const MainContainer = () => {
  return (
    <div className="MainContainer">
       <Header />
       <div className="MainAside">
       <Aside />
       </div>
       
       <Result />       
       <Footer />
    </div>
  )
}

export default MainContainer
