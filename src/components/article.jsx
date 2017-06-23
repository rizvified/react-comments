import React, { Component } from 'react';

import Content from './content.jsx';
import CommentButton from './commentButton.jsx';
import CommentBox from './commentBox.jsx';

import getSelectedRange from '../utils/selection.js';

class Article extends Component {
  state = {
    hiddenCommentBtn: true,
    commentBtnLayout: {
      position: 'absolute',
      left: '0',
      top: '0',
      heightInPixels: 28,
      widthInPixels: 70
    },
    selectedText: null,
  }

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

  showCommentBtn = () => {
    this.setState(Object.assign(
      {},
      this.state.hiddenCommentBtn,
      {
        hiddenCommentBtn: false
      }
    ));
  }

  saveSelected = () => {
    const savedSelection = getSelectedRange();
    this.setState(Object.assign(
      {},
      this.state.selectedText,
      {
        selectedText: savedSelection
      }
    ));
  }

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

  render() {
    const {
      hiddenCommentBtn,
      commentBtnLayout
    } = this.state;
    return (
      <main>
        <Content
          handleMouseChange={ this.mouseChangeHandler }
        />
        <CommentButton
          layout={ commentBtnLayout }
          hidden={ hiddenCommentBtn }
          saveSelection={ this.saveSelected }
        />
        <CommentBox />
      </main>
    );
  }
}

export default Article;
