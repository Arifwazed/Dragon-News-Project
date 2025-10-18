import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold text-lg mb-3'>Find Us On</h1>
            <div>
                <button className="btn btn-xs sm:btn-sm md:btn-md w-full bg-base-100 py-7 "><FaFacebook /> Facebook</button>
                <button className="btn btn-xs sm:btn-sm md:btn-md w-full bg-base-100 py-7"><FaTwitter /> Twitter</button>
                <button className="btn btn-xs sm:btn-sm md:btn-md w-full bg-base-100 py-7"><RiInstagramFill /> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;