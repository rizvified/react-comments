import React from 'react';
import PropTypes from 'prop-types';

const CommentButton = ({ hidden, layout, saveSelection }) => (
  <div
    style={ {
      display: hidden === true ? 'none' : 'flex',
      position: layout.position,
      left: layout.left,
      top: layout.top,
      width: `${layout.widthInPixels}px`,
      height: `${layout.heightInPixels}px`,
    } }
  >
    <div className='buttons-group'>
      <button
        onClick={ saveSelection }
        className='buttons-group__comment-btn'
      >
        <i className='fa fa-comment' />
      </button>
      <div className='buttons-group__down-arrow-tip' />
    </div>
  </div>
);

CommentButton.propTypes = {
  hidden: PropTypes.bool,
  layout: PropTypes.object,
  saveSelection: PropTypes.func,
};

export default CommentButton;
