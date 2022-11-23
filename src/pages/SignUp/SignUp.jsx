import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';

const SignUp = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h1>this is sign up.</h1>
        </div>
    );
};

export default SignUp;