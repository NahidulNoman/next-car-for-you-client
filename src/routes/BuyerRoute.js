import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Buyer from '../hooks/Buyer';
import UseLoading from '../hooks/UseLoading';
import { AuthContext } from '../UserContext/UserContext';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer,isBuyerLoading] = Buyer(user?.email);
    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <UseLoading></UseLoading>
    }

    if (user && isBuyer) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;