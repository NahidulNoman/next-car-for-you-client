import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Seller from '../hooks/Seller';
import UseLoading from '../hooks/UseLoading';
import { AuthContext } from '../UserContext/UserContext';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = Seller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <UseLoading></UseLoading>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;