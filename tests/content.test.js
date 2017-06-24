import React from 'react';
import { shallow, render } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';

import Content from '../src/components/content.jsx';

describe('Content', () => {
  it('renders without exploding', () => {
    ReactTestUtils.renderIntoDocument(<Content />);
  });

  it('renders the title', () => {
    const wrapper = render(<Content />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('renders the paragraphs', () => {
    const wrapper = render(<Content />);
    expect(wrapper.find('p')).toHaveLength(3);
  });
});
