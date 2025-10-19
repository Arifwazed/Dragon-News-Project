import React, { useEffect, useState } from 'react';
import Header from '../Header';
import RightAside from '../homelayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from './NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news,setNews] = useState({});
    // console.log('news id: ',id);

    useEffect(()=>{
        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails)
    },[data,id])
    console.log("news",news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-3 md:grid-cols-12 gap-4'>
                <section className='col-span-3 md:col-span-9'>
                    <h1 className='text-xl font-bold'>Dragon News</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;