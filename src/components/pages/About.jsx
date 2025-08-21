import React, { useState } from "react";

const CommentSection = ({ comments }) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    // In a real app, you would send this to an API
    console.log("New comment submitted:", newComment);
    setNewComment("");
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Comments</h3>
      <form onSubmit={handleCommentSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment..."
          rows="4"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700"
        >
          Post Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3 mb-2">
              <span className="font-semibold text-gray-800">
                {comment.author}
              </span>
              <span className="text-xs text-gray-500">{comment.date}</span>
            </div>
            <p className="text-gray-700">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
