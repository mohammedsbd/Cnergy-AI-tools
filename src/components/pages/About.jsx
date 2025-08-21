import React from "react";

const ClientMarquee = ({ logos }) => {
  // To create the seamless loop, we duplicate the logos array
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-gray-100">
      <div className="whitespace-nowrap animate-marquee flex">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 opacity-60 hover:opacity-100 transition duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientMarquee;
