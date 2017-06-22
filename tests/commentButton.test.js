import React from 'react';
import { shallow } from 'enzyme';

import CommentButton from '../src/components/commentButton.jsx';

describe('CommentButton', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<CommentButton />);
  });

  it('clicking comment button make CommentBox visible', () => {
    const saveSelected = jest.fn();
    const wrapper = shallow(
      <CommentButton
        saveSelection={ saveSelected }
        hidden={ false }
        layout={ { left: '0', right: '0', position: 'absolute', width: 30, height: 70 } }
      />,
    );

    wrapper.find('button').simulate('click');
    expect(saveSelected).toBeCalled();
  });
});
