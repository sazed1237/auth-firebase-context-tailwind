import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Register = () => {

    const { user, createUser } = useContext(AuthContext)
    // console.log(createUser)

    const handleRegister = event => {

        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)


        // from authContext function
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (

        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Register !</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                <label className="label">
                                    <small>
                                        Already have an account?
                                        <Link to="/login" className="label-text-alt text-blue-600 font-semibold link link-hover">  Login</Link>
                                    </small>
                                </label>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;