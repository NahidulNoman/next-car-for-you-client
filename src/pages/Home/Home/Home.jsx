import React from 'react';
import AboutHome from '../AboutHome/AboutHome';
import Banner from '../Banner/Banner';
import HomeCategories from '../HomeCategories/HomeCategories';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <HomeCategories></HomeCategories>
            <AboutHome></AboutHome>
        </div>
    );
};

export default Home;