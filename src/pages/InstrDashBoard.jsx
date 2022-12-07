import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HelpDesk from '../components/HelpDesk';
import "./InstrDashBoard.css";

const InstrDashBoard = () => {
  return (
    <div className='dashBoardContainer'>
        <div className='headerWrapper'>
            <Header />
            <HelpDesk />
            <Footer />
        </div>

    </div>
  )
}

export default InstrDashBoard