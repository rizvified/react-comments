import React from 'react';
import { bool, string, func } from 'prop-types';

const CommentBox = ({
    hidden,
    comment,
    selected,
    handleBoxClose,
    handleFormSubmit,
    handleFormChange,
  }) => (
    <form
      className='comment-box'
      onSubmit={ handleFormSubmit }
      style={ {
        display: hidden === true ? 'none' : 'flex',
      } }
    >
      <div className='row no-margin'>
        <h3 className='comment-box__heading pull-left'>Responses</h3>
        <button
          type='button'
          className='comment-box__close-button pull-right'
          onClick={ handleBoxClose }
        >
          <i className='fa fa-times' />
        </button>
      </div>
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
        required
      />
      <div className='row no-margin'>
        <button type='submit' className='comment-box__submit-button pull-left'>
        Respond
      </button>
        <i className='fa fa-user-circle pull-right comment-box__user-icon' />
      </div>
    </form>
);

CommentBox.propTypes = {
  hidden: bool,
  comment: string,
  selected: string,
  handleBoxClose: func,
  handleFormChange: func,
  handleFormSubmit: func,
};

export default CommentBox;
