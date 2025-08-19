import React from "react";

export default function ProfileCard({
  name = "John Doe",
  bio = "Web Developer",
}) {
  return (
    <div className="max-w-sm mx-auto mt-6 border rounded-lg p-4 shadow">
      <img
        src="https://picsum.photos/100"
        alt="profile"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-center text-xl font-bold mt-3">{name}</h2>
      <p className="text-center text-gray-600">{bio}</p>
      <button className="block mx-auto mt-3 bg-blue-600 text-white px-3 py-1 rounded">
        Follow
      </button>
    </div>
  );
}
