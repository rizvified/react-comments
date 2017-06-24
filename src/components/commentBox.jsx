import React from 'react';
import PropTypes from 'prop-types';

const CommentBox = ({ hidden, comment, handleFormSubmit, handleFormChange }) => (
  <div hidden={ hidden }>
    <form
      className='comment-box'
      onSubmit={ handleFormSubmit }
    >
      <label htmlFor='commentBox' className='visuallyhidden'>
        Add your comment
      </label>
      <textarea
        id='commentBox'
        className='comment-box__text-area'
        placeholder='Add your comment'
        onChange={ handleFormChange }
        value={ comment }
      />
      <button type='submit' className='comment-box__submit-button'>
        submit
      </button>
    </form>
  </div>
  );

CommentBox.propTypes = {
  hidden: PropTypes.bool,
  comment: PropTypes.string,
  handleFormChange: PropTypes.func,
  handleFormSubmit: PropTypes.func,
};

export default CommentBox;
