import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetails from './CategoryDetails';

const CategoriesDetails = () => {
    const categoriesDetails = useLoaderData();


    console.log(categoriesDetails)
    return (
        <div className='mx-5'>
            <h3>Your Selected Car Details</h3>
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