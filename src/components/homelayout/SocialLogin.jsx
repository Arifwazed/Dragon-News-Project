import React, { use, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../provider/AuthContext';

const SocialLogin = () => {
    const {logInGoogleUser,users} = use(AuthContext)
    const [google,setGoogle] = useState(false)
    const handleGoogle = () => {
        console.log('google button clicked')
        logInGoogleUser()
        .then(result => {
            const googleUser = result.user;
            console.log(googleUser)
            setGoogle(true)
            alert('google login successful!!!')
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
                {/* <button onClick={handleGoogle} className='btn btn-outline btn-secondary w-full '><FcGoogle size={24}/> Login with Google</button> */}
                <button className='btn btn-outline btn-primary w-full '><FaGithub size={24}/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;