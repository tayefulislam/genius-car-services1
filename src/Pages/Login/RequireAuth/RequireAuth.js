import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);

    console.log(user)

    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // if (!user.emailVerified) {

    //     return <div>
    //         <h1>email not varifided</h1>
    //     </div>



    // }


    return children;
};

export default RequireAuth;