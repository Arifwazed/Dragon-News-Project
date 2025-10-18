import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json').then(res => res.json())

const Categories = () => {
    const catagories = use(categoryPromise)
    // console.log(catagories)
    return (
        <div>
            <h1 className='font-bold text-lg'>All Caterogy ({catagories.length})</h1>
            <div className='grid grid-cols-1 mt-3 gap-1'>
                {
                    catagories.map((category) => 
                    <NavLink 
                        key={category.id} 
                        className={"btn bg-base-100 hover:bg-base-200 border-0 py-5 text-accent-content text-base"}
                        to={`/category/${category.id}`}>
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;