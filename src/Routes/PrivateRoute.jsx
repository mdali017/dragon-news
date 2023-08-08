import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location, 8)

    

    if(!user){
        return <Navigate state={{from: location}}  to='/login' replace></Navigate>
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;