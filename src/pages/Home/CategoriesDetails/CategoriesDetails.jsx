import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetails from './CategoryDetails';
import CategoryModal from './CategoryModal';

const CategoriesDetails = () => {
    const categoriesDetails = useLoaderData();
    const [modal , setModal] = useState(null);
    
    console.log(modal)
    return (
        <div className='mx-5'>
            <h3 className='text-3xl font-bold text-accent mt-10'>Your Selected Car Details</h3>
            <div>
                {
                    categoriesDetails.map(catDetails => <CategoryDetails
                        key={catDetails._id}
                        catDetails={catDetails}
                        setModal={setModal}
                    ></CategoryDetails>)
                }
            </div>
            {
                modal && <CategoryModal 
                    setModal={setModal}
                    modal={modal}
                ></CategoryModal>
            }
        </div>
    );
};

export default CategoriesDetails;