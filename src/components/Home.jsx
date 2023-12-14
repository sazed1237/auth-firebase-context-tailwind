import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h3>this is home page {user && <span>{user.displayName}</span> } </h3>
        </div>
    );
};

export default Home;