import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="card bg-base-100 shadow-md border border-gray-100 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">{title}</h2>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full rounded-lg mb-3 object-cover"
        />
        <p className="text-sm text-gray-600 mb-2">
          {details.slice(0, 200)}...
        </p>
        <p className="text-primary font-semibold cursor-pointer hover:underline">
          Read More
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-base-200 px-2 py-1 rounded-md text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <hr className="mx-4 text-base-300"/>

      {/* Footer */}
      <div className="flex justify-between items-center  px-4 py-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <span className="font-semibold">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
