import React, { use } from 'react';
import Marquee from 'react-fast-marquee';
const categoryPromise = fetch('/news.json').then(res => res.json())

const LatestNews = () => {
    const catagoriesData = use(categoryPromise);
    const breakingNews = catagoriesData.filter(news => news.others.is_today_pick == true)
    
    // console.log("From latest: ",breakingNewsTitle)
    return (
        <div className='flex items-center gap-4 bg-base-200 p-3'>
            <p className='bg-secondary px-4 py-2 text-white font-semibold'>Latest</p>
            {/* <Marquee className='flex gap-10 font-semibold' pauseOnHover={true} speed={70}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo quisquam consequatur fugit, quia hic animi enim rerum explicabo molestiae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo quisquam consequatur fugit, quia hic animi enim rerum explicabo molestiae.</p>
            </Marquee> */}

            <Marquee className='flex gap-10 font-semibold' pauseOnHover={true} speed={70}>
                {
                    breakingNews.map(news => <p className='mr-10'>{news.title}</p>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;