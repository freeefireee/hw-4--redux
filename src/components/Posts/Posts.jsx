import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../PostSlice/PostsSlice';
import { Link } from 'react-router-dom';
import './posts.css';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  return (
    <div className='block-content'>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error loading posts</p>}
      {status === 'succeeded' &&
        posts.map((post) => (
          <div className='key' key={post.id}>
            <div className='block'>
              <div className='text'>
                <h1>{post.id}</h1>
                <h2>{post.title}</h2>
                <h4>
                  {post.body.length > 20 ? `${post.body.substring(0, 20)}...` : post.body}
                  <Link className='more' to={`/posts/${post.id}`}>
                    More...
                  </Link>
                </h4>
                <div>
                  <button className='details'>
                    <Link to={`/posts/${post.id}`}>Details</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Posts;
