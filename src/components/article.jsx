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
      position: 'absolute',
      left: '0',
      top: '0',
      heightInPixels: 28,
      widthInPixels: 70
    },
    selectedTextRange: null,
    selectedText: '',
    comment: '',
    commentList: []
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

  // function for toggling state
  toggleState = (updateState) => {
    this.setState(Object.assign(
      {},
      this.state.updateState,
      {
        [updateState]: !this.state[updateState]
      }
    ));
  }
  /* --- */

  /* event handlers */
  // callback fired is mouse's button is released
  mouseUpHandler = () => {
    const selection = getSelectedRange();

    if (
      selection !== null &&
      selection.startOffset !== selection.endOffset &&
      selection.toString() !== " "
      ) {
      const rectangle = selection.getBoundingClientRect();

      this.setPosition(rectangle);
      this.showCommentBtn();
    } else {
      this.hideCommentBtn();
    }
  };

  // callback fired when comment is changed
  formChangeHandler = (e) => {
    this.setState(Object.assign(
      {},
      this.state.comment,
      {
        comment: e.target.value
      }
    ));
  }

  // callback fired when comment is submitted
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

      this.toggleCommentBtn();
      this.toggleCommentBox();
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

  // displays the comment button
  showCommentBtn = () => {
    this.setState(Object.assign(
      {},
      this.state.hiddenCommentBtn,
      {
        hiddenCommentBtn: false
      }
    ));
  }

  // hides the comment button
  hideCommentBtn = () => {
    this.setState(Object.assign(
      {},
      this.state.hiddenCommentBtn,
      {
        hiddenCommentBtn: true
      }
    ));
  }
  // shows or hides the comment box
  toggleCommentBox = () => {
    this.toggleState('hiddenCommentBox');
  }

  // shows or hides the comment button
  toggleCommentBtn = () => {
    this.toggleState('hiddenCommentBtn');
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
    this.toggleCommentBox();
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
