import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../UserContext/UserContext';
import Advertised from './Advertised';

const AdvertisedItems = () => {
    const {user} = useContext(AuthContext);
    const [advertised , setAdvertised] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/homeProducts?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setAdvertised(data);
        })
    },[user?.email]);

    if(advertised.length === 0) {
        return ;
    }
    
    // console.log('advertised', advertised);
    return (
        <div>
            <h1 className='text-3xl mt-12 mb-12 font-semibold'>Advertised</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    advertised?.map(ad => <Advertised
                        key={ad._id}
                        ad={ad}
                    ></Advertised>)
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;