import React from 'react';
import PropTypes from 'prop-types';

const CommentList = ({ comments }) => (
  <section className='row'>
    <div className='comment-list'>
      {
        comments.map(comment => (
          <span key={ comment.id } className='col-md-12'>
            <a href={ `#${comment.id}` }>
              <strong>Anonymous</strong> :
            <p className='comment-list__comment'>
              {comment.message}
            </p>
              <h3>
                {comment.selected_text}
              </h3>
            </a>
          </span>
      ))
    }
    </div>
  </section>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentList;
