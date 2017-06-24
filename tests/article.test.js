import React from 'react';
import { shallow } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';

import Article from '../src/components/article.jsx';
import Content from '../src/components/content.jsx';
import CommentButton from '../src/components/commentButton.jsx';
import CommentBox from '../src/components/commentBox.jsx';
import CommentList from '../src/components/commentList.jsx';


describe('Article', () => {
  it('renders without exploding', () => {
    ReactTestUtils.renderIntoDocument(<Article />);
  });

  it('has a Content component', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper.find(Content)).toHaveLength(1);
  });

  it('has a CommentButton component', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper.find(CommentButton)).toHaveLength(1);
  });

  it('has a CommentBox component', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper.find(CommentBox)).toHaveLength(1);
  });

  it('has a CommentList component', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper.find(CommentList)).toHaveLength(1);
  });
});
