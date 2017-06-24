import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';

import Article from '../src/components/article.jsx';
import CommentBox from '../src/components/commentBox.jsx';

describe('CommentBox', () => {
  it('renders without exploding', () => {
    ReactTestUtils.renderIntoDocument(<CommentBox />);
  });

  it('renders a form', () => {
    const wrapper = render(<CommentBox />);
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('changes value upon input ', () => {
    const wrapper = shallow(<CommentBox />);
    const articleWrapper = shallow(<Article />);
    const handler = jest.fn(e => articleWrapper.setState({ comment: e.target.value }));
    const e = {
      target: { value: 'Foo' },
    };
    wrapper.find('textarea').simulate('change', e);
    handler(e);
    expect(handler).toHaveBeenCalled();
    expect(articleWrapper.state('comment')).toEqual('Foo');
  });

  it('submits the form', () => {
    const articleWrapper = mount(<Article />);
    articleWrapper.setState({
      selectedText: { surroundContents: jest.fn() },
    });
    const commentBoxWrapper = articleWrapper.find(CommentBox);

    commentBoxWrapper.find('textarea').simulate('change', {
      target: { value: 'Bar' },
    });

    commentBoxWrapper.find('form').simulate('submit');
    expect(
      articleWrapper
        .state('commentList')
        .slice(-1)
        .pop().message,
    ).toEqual('Bar');
  });
});
