import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Address from '../Address/address'

const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Services/>
            <Review/>
            <Address/>
            <Footer/>
        </div>
    );
};

export default Home;