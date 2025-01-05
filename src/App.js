import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from "./pages/about";
import Blog from "./pages/blog";

import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:page" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;