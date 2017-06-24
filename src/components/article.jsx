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
    selectedText: null,
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
    const markWrapper = document.createElement('mark');
    markWrapper.setAttribute('id', uniqueId);
    this.state.selectedText.surroundContents(markWrapper);
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
  // callback fired is mouse's screen position is changed
  mouseChangeHandler = () => {
    const selection = getSelectedRange();

    if (
      selection !== null &&
      selection.startOffset !== selection.endOffset &&
      selection.toString() !== " "
      ) {
      const rectangle = selection.getBoundingClientRect();
      this.setPosition(rectangle);
      this.showCommentBtn();
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

      this.wrapSelectedTextWithId(uniqueId);

      this.updateCommentList({
        id: uniqueId,
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
  saveSelected = () => {
    const savedSelection = getSelectedRange();
    this.setState(Object.assign(
      {},
      this.state.selectedText,
      {
        selectedText: savedSelection
      }
    ));
    this.toggleCommentBox();
  }
  /* --- */

  render() {
    const {
      hiddenCommentBox,
      hiddenCommentBtn,
      commentBtnLayout,
      comment,
      commentList
    } = this.state;
    return (
      <main className='article'>
        <Content
          handleMouseChange={ this.mouseChangeHandler }
        />
        <CommentButton
          layout={ commentBtnLayout }
          hidden={ hiddenCommentBtn }
          saveSelection={ this.saveSelected }
        />
        <CommentBox
          hidden={ hiddenCommentBox }
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
