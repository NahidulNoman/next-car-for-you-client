import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetails from './CategoryDetails';
import CategoryModal from './CategoryModal';

const CategoriesDetails = () => {
    const [modal , setModal] = useState({});
    const categoriesDetails = useLoaderData();

    console.log(modal);
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