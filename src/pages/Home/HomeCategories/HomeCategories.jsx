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
        <div>
            <div>
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