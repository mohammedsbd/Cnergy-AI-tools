import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import Dashboard from "./components/pages/Dashboard";
import WriteArticle from "./components/pages/WriteArticle";
import BlogTitles from "./components/pages/BlogTitles";
import GenerateImages from './components/pages/GenerateImages';
import RemoveBackground from './components/pages/RemoveBackground';
import RemoveObject from './components/pages/RemoveObject';
import ReviewResume from "./components/pages/ReviewResume";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Nested route starts here */}
      <Route path="/ai" element={<Layout />}>
        <Route index element={<Dashboard />} /> {/* This renders at /ai */}
        <Route path="write-article" element={<WriteArticle />} />
        {/* /ai/write-article */}
        <Route path="blog-titles" element={<BlogTitles />} />
        <Route path="generate-images" element={<GenerateImages />} />
        <Route path="remove-background" element={<RemoveBackground />} />
        <Route path="remove-object" element={<RemoveObject />} />
        <Route path="review-resume" element={<ReviewResume />} />
        {/* /ai/blog-titles */}
      </Route>
    </Routes>
  );
};

export default App;
