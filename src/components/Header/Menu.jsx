import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
  return (
    <header>
      <h2 className='nav-h2'><Link to="/posts">Posts</Link></h2>
      <h2 className='nav-h2'><Link to="/post-details/1">PostDetails (Post #1)</Link></h2>
      <h2 className='nav-h2'><Link to="/post-details/2">PostDetails (Post #2)</Link></h2>
    </header>
  );
};

export default Menu;
