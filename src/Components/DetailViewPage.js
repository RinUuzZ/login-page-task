import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailViewPage.css';

const DetailViewPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error loading post</div>;
  if (!post) return <div className="no-data">No post found</div>;

  return (
    <div className="detail-container">
        <h1>{post.userId}</h1>
        <p>{post.id}</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/list" className="back-link">Back to Posts</Link>
    </div>
  );
};

export default DetailViewPage;
