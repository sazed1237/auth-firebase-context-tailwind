import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>

            <div className="navbar bg-primary text-primary-content">
                <button className="btn btn-ghost text-xl">Auth Master</button>
                <Link className="btn btn-ghost text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost text-xl" to="/orders">Orders</Link>
                {user &&
                    <Link className="btn btn-ghost text-xl" to="/profile">Profile</Link>
                }
                <Link className="btn btn-ghost text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost text-xl" to="/register">Register</Link>

                {
                    user ?
                        <>
                            <span className='text-center'>{user.email}</span>
                            <button onClick={handleLogOut} className="btn btn-sm">Sing Out</button>
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;