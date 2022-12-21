import React from 'react';
import AboutHome from '../AboutHome/AboutHome';
import AboutSite from '../AboutSite/AboutSite';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import HomeCategories from '../HomeCategories/HomeCategories';

const Home = () => {
    
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <HomeCategories></HomeCategories>
            <AboutHome></AboutHome>
            <AboutSite></AboutSite>
        </div>
    );
};

export default Home;