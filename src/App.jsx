import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Layout from './components/pages/Layout';
import Dashboard from './components/pages/Dashboard';
import WriteArticle from './components/pages/WriteArticle';
import BlogTitles from './components/pages/BlogTitles';

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ai" element={<Layout />} />
      <Route index element={<Dashboard />} />
      <Route path='write-article' element={<WriteArticle />} />
      <Route path='blog-titles' element={<BlogTitles />} />
    

    </Routes>
    </div>
  )
}

export default App
