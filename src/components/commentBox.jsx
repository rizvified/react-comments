import React from 'react';
import PropTypes from 'prop-types';

const CommentBox = () => (
  <form
    className='comment-box'
  >
    <label htmlFor='commentBox' className='visuallyhidden'>
        Add your comment
      </label>
    <textarea
      id='commentBox'
      className='comment-box__text-area'
      placeholder='Add your comment'
    />
    <button type='submit'>
        submit
      </button>
  </form>
  );

CommentBox.propTypes = {};

export default CommentBox;
