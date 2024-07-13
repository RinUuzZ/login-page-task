import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ListViewPage.css';

const ListViewPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error loading posts</div>;

  return (
    <div className="list-container">
      <h2>Posts</h2>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
            <Link to={`/detail/${post.id}`} className="details-link">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListViewPage;
