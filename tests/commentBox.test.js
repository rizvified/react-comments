import React from 'react';
import { shallow } from 'enzyme';

import CommentBox from '../src/components/commentBox.jsx';

describe('CommentBox', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<CommentBox />);
  });

  it('renders a form', () => {
    const wrapper = render(<CommentBox />);
    expect(wrapper.find('form')).toHaveLength(1);
  });
});
