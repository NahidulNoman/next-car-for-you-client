import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetails from './CategoryDetails';

const CategoriesDetails = () => {
    const categoriesDetails = useLoaderData();

    
    // console.log(categoriesDetails)
    return (
        <div className='mx-5'>
            <h3 className='text-3xl font-bold text-accent mt-10'>Your Selected Car Details</h3>
            <div>
                {
                    categoriesDetails.map(catDetails => <CategoryDetails
                        key={catDetails._id}
                        catDetails={catDetails}
                        
                    ></CategoryDetails>)
                }
            </div>
        </div>
    );
};

export default CategoriesDetails;