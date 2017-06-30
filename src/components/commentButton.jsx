import React from 'react';
import { bool, object, func } from 'prop-types';

const CommentButton = ({ hidden, layout, saveSelection }) => (
  <div
    style={ {
      display: hidden === true ? 'none' : 'flex',
      left: layout.left,
      top: layout.top,
    } }
    className='buttons-group'
  >
    <button
      onClick={ saveSelection }
      className='buttons-group__comment-btn'
    >
      <span>
          Comment
        </span>
    </button>
    <span className='buttons-group__down-arrow-tip' />
  </div>
);

CommentButton.propTypes = {
  hidden: bool,
  layout: object,
  saveSelection: func,
};


export default CommentButton;
