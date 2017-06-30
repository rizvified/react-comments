import React, { Component } from 'react';

import Content from './content.jsx';
import CommentButton from './commentButton.jsx';
import CommentBox from './commentBox.jsx';
import CommentList from './commentList.jsx';

import getSelectedRange from '../utils/selection.js';

class Article extends Component {
  state = {
    hiddenCommentBox: true,
    hiddenCommentBtn: true,
    commentBtnLayout: {
      left: '0',
      top: '0',
      heightInPixels: 28,
      widthInPixels: 70
    },
    selectedTextRange: null,
    selectedText: '',
    comment: '',
    commentList:  []
  }

  /* helper functions */
  // computes the comment button position based on selected area
  setPosition = ({ left, top, width, height }) => {
    const { heightInPixels, widthInPixels } = this.state.commentBtnLayout;
    const computedLeft = left + (width / 2) - (widthInPixels / 2);
    const computedTop = window.scrollY + top - heightInPixels;

    this.setState({
      commentBtnLayout: Object.assign(
        {},
        this.state.commentBtnLayout,
        {
          left: computedLeft,
          top: computedTop
        }
      )
    });
  }

  // add uniqueId to the recent comment
  wrapSelectedTextWithId = (uniqueId) => {
    const markWrapper = document.createElement('span');
    markWrapper.setAttribute('id', uniqueId);
    this.state.selectedTextRange.surroundContents(markWrapper);
  }
  /* --- */

  /* event handlers */
  // callback fired when mouse's button is released
  mouseUpHandler = () => {
    const selection = getSelectedRange();

    if (
      selection !== null &&
      selection.startOffset !== selection.endOffset &&
      selection.toString() !== " "
      ) {
      const rectangle = selection.getBoundingClientRect();

      this.setPosition(rectangle);
      this.show('hiddenCommentBtn')
    } else {
      this.hide('hiddenCommentBtn')
      this.boxCloseHandler();
    }
  };

  // callback fired when comment box is closed
  boxCloseHandler = () => {
    this.hide('hiddenCommentBox')
    this.clearComment();
  }

  // callback fired when user enters a comment
  formChangeHandler = (e) => {
    this.setState(Object.assign(
      {},
      this.state.comment,
      {
        comment: e.target.value
      }
    ));
  }

  // callback fired when user submits a comment
  formSubmitHandler = (e) => {
    e.preventDefault();

    if (this.state.comment) {
      const uniqueId = Date.now();
      const text = this.state.selectedText;

      this.wrapSelectedTextWithId(uniqueId);

      this.updateCommentList({
        id: uniqueId,
        selected_text: text,
        message: this.state.comment
      });

      this.hide('hiddenCommentBox');
      this.clearComment();
    }
  }
  /* --- */

  /* general functions */
  // clears the current comment from state
  clearComment = () => {
    this.setState(Object.assign(
      {},
      this.state.comment,
      {
        comment: ''
      }
    ));
  }

  // shows the comment button or box
  show = (key) => {
    this.setState(Object.assign(
      {},
      this.state[key],
      {
        [key]: false
      }
    ));
  }

  // hides the comment button or box
  hide = (key) => {
    this.setState(Object.assign(
      {},
      this.state[key],
      {
        [key]: true
      }
    ));
  }

  // add new comment to the comment list
  updateCommentList = (newComment) => {
    this.setState(Object.assign(
      {},
      this.state.commentList,
      {
        commentList: [...this.state.commentList, newComment]
      }
    ));
  }

  // saves the selected text range in state
  saveTextRange = () => {
    const selectedRange = getSelectedRange();
    this.setState(Object.assign(
      {},
      this.state.selectedTextRange,
      {
        selectedTextRange: selectedRange
      }
    ));
    this.saveText();
    this.show('hiddenCommentBox');
    this.hide('hiddenCommentBtn');
  }

  saveText = () => {
    const selectedText = getSelectedRange().toString();
    this.setState(Object.assign(
      {},
      this.state.selectedText,
      {
        selectedText: selectedText
      }
    ));
  }
  /* --- */

  render() {
    const {
      hiddenCommentBox,
      hiddenCommentBtn,
      commentBtnLayout,
      selectedText,
      comment,
      commentList
    } = this.state;
    return (
      <main className='article'>
        <Content
          handleMouseUp={ this.mouseUpHandler }
        />
        <CommentButton
          layout={ commentBtnLayout }
          hidden={ hiddenCommentBtn }
          saveSelection={ this.saveTextRange }
        />
        <CommentBox
          hidden={ hiddenCommentBox }
          selected={ selectedText }
          comment={ comment }
          handleBoxClose={ this.boxCloseHandler }
          handleFormChange={ this.formChangeHandler }
          handleFormSubmit={ this.formSubmitHandler }
        />
        <CommentList
          comments={ commentList }
        />
      </main>
    );
  }
}

export default Article;
