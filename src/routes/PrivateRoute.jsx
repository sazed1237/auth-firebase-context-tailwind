import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)


    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }


    return (
        <div>
            <Navigate to="/login" replace={true}></Navigate>
        </div>
    );
};

export default PrivateRoute;