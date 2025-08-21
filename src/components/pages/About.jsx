import React from "react";

const AuthorProfile = ({ author }) => {
  return (
    <div className="flex items-center p-6 bg-gray-100 rounded-lg">
      <img
        src={author.avatarUrl}
        alt={author.name}
        className="w-20 h-20 rounded-full object-cover mr-6"
      />
      <div>
        <h4 className="text-xl font-bold text-gray-900">{author.name}</h4>
        <p className="text-sm text-gray-600 mb-2">{author.role}</p>
        <p className="text-gray-700">{author.bio}</p>
      </div>
    </div>
  );
};

export default AuthorProfile;
