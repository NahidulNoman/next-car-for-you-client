import React from 'react';
import AboutHomeData from './AboutHomeData';

const AboutHome = () => {
    const serveDate = [
        {
            id : 1,
            name : 'Top Buy & Sell Car',
            describe : 'Buy and sell the best and most trusted cars, we provide the best platform for you and easy to use.'
        },
        {
            id : 2,
            name : 'Easy Payment',
            describe : 'Transactions are very easy and safe. You can pay using anything and the money will be received by us.'
        },
        {
            id : 3,
            name : 'Easy To Use',
            describe : 'We will make it easier for you to use our platform and be able to sell or buy the car of your dreams car.'
        },
    ]
    return (
        <div className='mt-20'>
            <h2 className='text-center font-bold text-3xl lg:text-4xl mb-3'>What Our Serve For You</h2>
            <p className='text-center text-xl font-semibold opacity-75 mb-20'>We provide many of the services for you and you <br /> will get the best benefits here.</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serveDate.map(data => <AboutHomeData
                        key={data.id}
                        data={data}
                    ></AboutHomeData>)
                }
            </div>
        </div>
    );
};

export default AboutHome;