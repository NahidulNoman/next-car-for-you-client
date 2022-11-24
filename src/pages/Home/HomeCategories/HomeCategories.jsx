import React, { useEffect, useState } from 'react';
import HomeCategory from './HomeCategory';

const HomeCategories = () => {
    const [categories , setCategories] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => {
            setCategories(data)
            console.log(data)
        })
    },[])
    return (
        <div className='mt-16'>
            <h2 className='font-bold text-3xl mb-6'>Find Your Categories</h2>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <HomeCategory
                        key={category._id}
                        category={category}
                    ></HomeCategory>)
                }
            </div>
        </div>
    );
};

export default HomeCategories;