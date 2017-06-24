import React from 'react';
import { shallow } from 'enzyme';

import CommentButton from '../src/components/commentButton.jsx';

const layout = {
  position: 'absolute',
  left: '0',
  top: '0',
  heightInPixels: 28,
  widthInPixels: 70,
};
const hidden = true;

describe('CommentButton', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<CommentButton layout={ layout } hidden={ hidden } />);
  });

  it('clicking comment button make CommentBox visible', () => {
    const saveSelected = jest.fn();
    const wrapper = shallow(
      <CommentButton
        saveSelection={ saveSelected }
        hidden={ !hidden }
        layout={ layout }
      />,
    );

    wrapper.find('button').simulate('click');
    expect(saveSelected).toBeCalled();
  });
});
