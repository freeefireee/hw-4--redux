// PostDetails.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostById } from '../PostSlice/PostsSlice';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { updatePath } from '../PostSlice/navigationSlice';
import './PostDetails.css';

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.selectedPost);
  const status = useSelector((state) => state.posts.status);
  const navigate = useNavigate();

  const previousPath = useSelector((state) => state.navigation.path); // Добавлено

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPostById(id));
    }
    dispatch(updatePath('PostDetails')); // Обновлено
  }, [dispatch, id, status]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='block2'>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error loading post</p>}
      {status === 'succeeded' && post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>
            <button className='button-30' role='button' onClick={handleBack}>
              Назад
            </button>
          </p>
          {previousPath && <p>Предыдущий компонент: {previousPath}</p>} {/* Добавлено */}
        </div>
      ) : (
        <p>Пост не найден</p>
      )}
    </div>
  );
};

export default PostDetails;
