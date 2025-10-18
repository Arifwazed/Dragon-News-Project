import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';
import bgImg from '../../assets/bg.png'

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
            <img src={bgImg} className='w-full ' alt="" />
        </div>
    );
};

export default RightAside;