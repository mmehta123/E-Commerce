import React from 'react'
import Announcment from '../components/Announcment';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Footer from '../components/Footer.jsx';


const Home = () => {
    return (
        <div>
            <Announcment/>
            <Navbar />
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home