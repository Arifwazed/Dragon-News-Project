import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'
import { AuthContext } from '../provider/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const Navbar = () => {
    const {users,logOutUser} = use(AuthContext)
    // console.log("from navbar: ",users)
    const handleLogOut = () => {
        logOutUser()
        .then(result => {
            // console.log(result.user)
            toast.info('Log out Successfully')
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className='flex items-center justify-between'>
            
            <div className=''>{users && users.displayName}</div>
            <div className='nav flex gap-3 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex gap-3'>
                
                <img src={`${users ? (users.photoURL ? users.photoURL : userImg) : userImg}`} className='h-11 rounded-full' alt="" />
                {
                    users ? <button onClick={handleLogOut} className='btn btn-primary px-10 font-semibold'>Log Out</button> : <Link to="/auth/login" className='btn btn-primary px-10 font-semibold'>Login</Link>
                }
                
            {/* <ToastContainer position="top-center" autoClose={1000} theme="colored"/> */}
            </div>
        </div>
    );
};

export default Navbar;