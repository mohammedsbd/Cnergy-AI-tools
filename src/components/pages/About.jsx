import React from "react";

export default function AIHeroSection() {
  return (
    <div className="h-96 flex flex-col items-center justify-center text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Next-Gen AI Platform</h1>
      <p className="max-w-2xl mb-6">
        Harness the power of artificial intelligence to transform your workflow.
        Build smarter apps, generate creative content, and automate tasks with
        ease.
      </p>
      <div className="space-x-4">
        <button className="bg-white text-indigo-600 px-4 py-2 rounded">
          Get Started
        </button>
        <button className="border border-white px-4 py-2 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
}
