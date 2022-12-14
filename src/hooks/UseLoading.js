import React from 'react';

const UseLoading = () => {
    return (
        <div className="flex justify-center place-items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-gray-900" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    );
};

export default UseLoading;