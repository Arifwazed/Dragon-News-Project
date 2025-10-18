import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-3'>
            <p className='bg-secondary px-4 py-2 text-white font-semibold'>Latest</p>
            <Marquee className='flex gap-10 font-semibold' pauseOnHover={true} speed={70}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo quisquam consequatur fugit, quia hic animi enim rerum explicabo molestiae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo quisquam consequatur fugit, quia hic animi enim rerum explicabo molestiae.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;