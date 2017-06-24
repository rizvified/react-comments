import React from 'react';
import PropTypes from 'prop-types';

const CommentList = ({ comments }) => (
  <div className='comment-list'>
    {comments.map(comment => (
      <span key={ comment.id }>
        <a href={ `#${comment.id}` }>
          <strong>Anonymous</strong> :
            <p className='comment-list__comment'>
              {comment.message}
            </p>
        </a>
      </span>
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentList;
