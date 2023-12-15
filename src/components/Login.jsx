import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { Result } from 'postcss';

const Login = () => {

    const { singInUser, singInWithGoogle, singInWithGithub } = useContext(AuthContext)
    // console.log(singInUser)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)

        singInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
            })
            .catch(error => {
                console.log(error.message)
            })       
    }

    // sing in with social links
    const handleGoogleSingIn = () =>{
        singInWithGoogle()
    }

    const handleGithubSingIn = () =>{
        singInWithGithub()
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center t">
                    <h1 className="text-5xl font-bold">Please Login !</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-2">
                            <button onClick={handleGoogleSingIn} className="btn btn-primary">Sing in with Google</button>
                        </div>
                        <div className="form-control mt-2">
                            <button onClick={handleGithubSingIn} className="btn btn-primary">Sing in with Github</button>
                        </div>
                    </form>
                    <p className=' text-sm text-center'>NEW TO AUTH MASTER ?
                        <Link to={"/register"}>
                            <button className="btn btn-link">Register Now</button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;