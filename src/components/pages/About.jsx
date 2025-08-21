import React, { useState } from "react";

const BlogPostCard = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
        <div className="flex items-center text-gray-500 text-xs">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-75 transition-all duration-300 transform ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href={post.link}
          className="w-full text-center block bg-blue-600 text-white font-semibold py-2 rounded-lg"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
