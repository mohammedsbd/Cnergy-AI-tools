import React, { useRef, useState } from "react";

const VideoNewsPlayer = ({ videoSource, title }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full"
        src={videoSource}
        autoPlay
        loop
        muted={isMuted}
      ></video>
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
};

export default VideoNewsPlayer;
