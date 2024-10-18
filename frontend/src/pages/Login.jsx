import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

const Login = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const { loading, login } = useLogin();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(username, password);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto md:p-0 p-8'>
            <div className='w-full bg-indigo-900 shadow-md p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10'>
                <h1 className='text-3xl font-semibold text-center text-gray-200'>Login <span className='text-amber-400'>ChatHub</span></h1>
                <form onSubmit={handleLogin}>
                    <label className="input input-bordered flex items-center gap-2 my-4 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <Link to="/signup" className="link link-warning">Don't Have An Account?</Link>
                    <div className='mt-4'>
                        <button className="btn btn-block btn-warning" disabled={loading} >{ loading ? <span className="loading loading-dots loading-md"></span> : "Log In" }</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;