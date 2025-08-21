import React, { useRef } from "react";

const RelatedArticlesScroll = ({ articles }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust as needed
      scrollRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-900">Related Articles</h3>
      </div>
      <div
        className="flex overflow-x-auto scrollbar-hide space-x-4 p-2"
        ref={scrollRef}
      >
        {articles.map((article, index) => (
          <div key={index} className="flex-none w-80">
            <FeaturedArticleCard article={article} />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-2">
        <button
          onClick={() => scroll(-1)}
          className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => scroll(1)}
          className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RelatedArticlesScroll;
