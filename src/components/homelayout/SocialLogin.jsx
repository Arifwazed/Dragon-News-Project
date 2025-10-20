import React, { use, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../provider/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const SocialLogin = () => {
    const {logInGoogleUser,users,logInGithubUser,google,setGoogle,github,setGithub} = use(AuthContext)
    // const [google,setGoogle] = useState(false)
    // const [github,setGithub] = useState(false)
    const handleGoogle = () => {
        // console.log('google button clicked')
        logInGoogleUser()
        .then(result => {
            const googleUser = result.user;
            // console.log(googleUser)
            setGoogle(true)
            if(github == true){setGithub(false)}
            // alert('google login successful!!!')
            toast.success("Login successfully!");
        })
        .catch(error => {
            console.log(error.code)
        })
    }

    const handleGithub = () => {
        // console.log('Github button clicked')
        logInGithubUser()
        .then(result => {
            const githubUser = result.user;
            // console.log("git user: ",githubUser)
            setGithub(true)
            if(google == true){setGoogle(false)}
            // alert('Github login successful!!!')
            toast.success("Login successfully!");
        })
        .catch(error => {
            console.log(error.code)
        })
    }
    return (
        <div>
            <h1 className='font-bold text-lg'>Login With</h1>
            <div className='space-y-3 mt-3'>
                {
                    users ? (google ? "" : <button onClick={handleGoogle} className='btn btn-outline btn-secondary w-full '><FcGoogle size={24}/> Login with Google</button>) : <button onClick={handleGoogle} className='btn btn-outline btn-secondary w-full '><FcGoogle size={24}/> Login with Google</button>
                }
                {
                    users ? (github ? "" : <button onClick={handleGithub} className='btn btn-outline btn-primary w-full '><FaGithub size={24}/> Login with Github</button>) : <button onClick={handleGithub} className='btn btn-outline btn-primary w-full '><FaGithub size={24}/> Login with Github</button>
                }

                {/* <button onClick={handleGoogle} className='btn btn-outline btn-secondary w-full '><FcGoogle size={24}/> Login with Google</button> */}
                {/* <button onClick={handleGithub} className='btn btn-outline btn-primary w-full '><FaGithub size={24}/> Login with Github</button> */}
            </div>
            {/* <ToastContainer position="top-center" autoClose={1000} theme="colored"/> */}
        </div>
    );
};

export default SocialLogin;