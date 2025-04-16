import React, { useState, useEffect } from 'react';
import './FetchApi.css';

const FetchApi = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.log('Error fetching comments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      {loading ? (
        <p>Loading comments...</p>
      ) : (
        <div>
          {comments.slice(0, 10).map((comment) => (
            <div className='flex'>
                <div className='flex flex-col'>
                    <p>{comment.name}</p>
                    <p>{comment.email}</p>
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchApi;
