import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const {id} = useParams()
    const data = useLoaderData();
    const [categoryNews,setCategoryNews] = useState([])
    // console.log(id,data)
    useEffect(()=>{
        if(id == '0'){
            setCategoryNews(data)
        }
        else if(id == '1'){
            const filterNews = data.filter((news) => news.others.is_today_pick == true)
            setCategoryNews(filterNews)
        }
        else{
            const filterNews = data.filter((news) => news.category_id == id)
            setCategoryNews(filterNews)
            // console.log(filterNews)
        }
    },[id,data])
    return (
        <div>
            {/* <h1>News from category - {id}</h1> */}
            <h1 className='font-bold text-lg'>Total <span className='text-secondary'>{categoryNews.length}</span> news found </h1>
            <div className='grid grid-cols-1 gap-5 mt-5'>
                {
                    categoryNews.map((news) => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;