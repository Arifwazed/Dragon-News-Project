import React from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
        <div className='border border-gray-300 p-5 rounded-lg mt-5'>
            <img src={news.image_url} className="w-full rounded-lg mb-3 h-[400px] md:h-[600px] object-cover" alt="" />
            <h1 className="text-lg font-bold mb-3">{news.title}</h1>
            <p className="text-sm text-gray-500 mb-8">{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn btn-secondary '><IoArrowBackCircleOutline size={20} /> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;