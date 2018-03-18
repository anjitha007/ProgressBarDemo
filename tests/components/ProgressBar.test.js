import React from 'react';
import ProgressBar from '../../app/components/ProgressBar';

describe('ProgressBar Component', () => {
  let wrapper;
  it('should exist', () => {
    wrapper = shallow(<ProgressBar index={0} limit={130}
      progress={40} />);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('.progress').type()).toEqual('div');
  });
  it('should display Progress Bar with Progress % equal to Progress', () => {
    wrapper = shallow(<ProgressBar index={0} limit={130}
      progress={40} />);
    expect(wrapper.find('.bar')).toBeTruthy();
    expect(wrapper.find('.display').text()).toBe("40%");
    expect(wrapper.find('.bar-alert').length).toBe(0);
  });

  it('should display Progress Bar with Progress % with Error', () => {
    wrapper = shallow(<ProgressBar index={0} limit={130}
      progress={140} />);
    expect(wrapper.find('.bar').length).toBe(0);
    expect(wrapper.find('.bar-alert')).toBeTruthy();
    expect(wrapper.find('.display').text()).toBe("140%");
  });

  it('should display Progress Bar with 0 % when progress is -ve', () => {
    wrapper = shallow(<ProgressBar index={0} limit={130}
      progress={-20} />);
    expect(wrapper.find('.bar').length).toBe(1);
    expect(wrapper.find('.bar-alert').length).toBe(0);
    expect(wrapper.find('.display').text()).toBe("0%");
  });
  
  
});