import React from 'react';
import PropTypes from 'prop-types';

const CommentBox = ({ hidden, comment, selected, handleFormSubmit, handleFormChange }) => (
  <div hidden={ hidden }>
    <form
      className='comment-box'
      onSubmit={ handleFormSubmit }
    >
      <h3 className='comment-box__heading'>Responses</h3>
      <hr className='comment-box__seperator' />
      <h3 className='comment-box__selected-text'>
        { selected }
      </h3>
      <textarea
        id='commentBox'
        className='comment-box__text-area'
        placeholder='Respond here...'
        onChange={ handleFormChange }
        value={ comment }
        autoFocus
      />
      <div className='row no-margin'>
        <button type='submit' className='comment-box__submit-button pull-left'>
        Respond
      </button>
        <i className='fa fa-user-circle pull-right comment-box__user-icon' />
      </div>
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
