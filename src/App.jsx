// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import Menu from './components/Header/Menu';

const App = () => {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/post-details/:id" element={<PostDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
