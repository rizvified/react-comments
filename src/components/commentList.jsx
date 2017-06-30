import React from 'react';
import { arrayOf, object } from 'prop-types';

const CommentList = ({ comments }) => (
  <section className='row'>
    <div className='comment-list'>
      {
        comments.map(comment => (
          <div key={ comment.id } className='comment-list__box'>
            <div className='comment-list__user-info'>
              <i className='fa fa-user-circle comment-list__user-avatar pull-left' />
              <h3 className='comment-list__user-name'>Anonymous</h3>
            </div>
            <a href={ `#${comment.id}` }>
              <div className='comment-list__selected-text-box'>
                <h3 className='comment-list__selected-text'>
                  {comment.selected_text}
                </h3>
              </div>
            </a>
            <p className='comment-list__comment'>
              {comment.message}
            </p>
          </div>
      ))
    }
    </div>
  </section>
);

CommentList.propTypes = {
  comments: arrayOf(object),
};

export default CommentList;
