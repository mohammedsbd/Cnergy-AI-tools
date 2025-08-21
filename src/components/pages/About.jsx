import React from "react";

const TeamMemberCard = ({ name, role, photo }) => {
  return (
    <div className="text-center p-6">
      <img
        src={photo}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
