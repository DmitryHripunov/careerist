import React from 'react';

const CommentList = ({ comments }) => {

  return (
    <ul className="comment-list comments-container">
    {
      comments.map((comment) => {
        return (
          <li className="comment-item" 
            key={comment.id}
          >
          <article>
            <header className="comment-user">
              <span className="comment-data">
                {comment.date}
              </span>
              <h2 >{comment.name}</h2>
            </header>
  
            <p className="comment-text">
              {comment.text}
            </p>
          </article>
        </li>
        )
      })
    }
  </ul>
  );
}

export default CommentList;

