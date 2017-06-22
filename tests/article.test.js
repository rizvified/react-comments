import React from 'react';
import { shallow } from 'enzyme';

import Article from '../src/components/article.jsx';
import Content from '../src/components/content.jsx';
import CommentButton from '../src/components/commentButton.jsx';


describe('Article', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<Article />);
  });

  it('has a Content component', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper.find(Content)).toHaveLength(1);
  });

  it('has a CommentButton component', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper.find(CommentButton)).toHaveLength(1);
  });
});
