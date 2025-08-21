import React, { useState } from "react";

const PhotoGallery = ({ photos }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.thumbnailUrl}
            alt={photo.caption}
            onClick={() => setSelectedImage(photo)}
            className="w-full h-auto rounded-lg cursor-pointer object-cover transform hover:scale-105 transition-transform duration-200"
          />
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            &times;
          </button>
          <div className="flex flex-col items-center">
            <img
              src={selectedImage.fullUrl}
              alt={selectedImage.caption}
              className="max-h-full max-w-full rounded-lg"
            />
            {selectedImage.caption && (
              <p className="text-white text-center mt-4">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
