import React from "react";

const SocialMediaLinks = () => {
  const socialLinks = [
    { name: "Twitter", url: "#", icon: "🐦" },
    { name: "LinkedIn", url: "#", icon: "💼" },
    { name: "Facebook", url: "#", icon: "📘" },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          aria-label={link.name}
          className="text-gray-500 hover:text-blue-600 transition duration-300"
        >
          <span className="text-2xl">{link.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
