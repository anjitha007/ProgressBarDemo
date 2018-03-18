import React from 'react';
import Button from '../../app/components/Button';

describe('Button Component', () => {
  let buttonWrapper;
  const onClick = jest.fn();
  beforeEach(() => {
    buttonWrapper = shallow(<Button index={0} onClick={onClick}
      label={40} />);
  });

  it('should exist', () => {
    expect(buttonWrapper).toBeTruthy();
    expect(buttonWrapper.find('.button').type()).toEqual('button');
  });
  it('should display button component with label', () => {
    expect(buttonWrapper.find('.button').type()).toEqual('button');
    expect(buttonWrapper.find('.button').text()).toEqual("40");
  });
  it('should be able click the button ', () => {
    expect(buttonWrapper.find('button').length).toBe(1);
    const wrapper = shallow(<Button index={0} onClick={onClick}
      label={40} />);
    wrapper.find('button').simulate('click',  "40");
    expect(onClick).toBeCalledWith("40");

  });
  
});