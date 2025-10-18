import React from 'react';
import swimmimg from '../../assets/swimming.png'
import classimg from '../../assets/class.png'
import playImg from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200'>
            <h1 className='font-bold text-lg mb-8'>Q-Zone</h1>
            <div className='space-y-5'>
                <img src={swimmimg} className='w-full px-8' alt="" />
                <img src={classimg} className='w-full px-8' alt="" />
                <img src={playImg} className='w-full px-8' alt="" />
            </div>
        </div>
    );
};

export default Qzone;