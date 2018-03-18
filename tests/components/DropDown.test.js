import React from 'react';
import DropDown from '../../app/components/DropDown';

describe('DropDown Component', () => {
  let dropdownWrapper;
  const onChange = jest.fn();
  const options = [1, 2, 3];
  beforeEach(() => {
    dropdownWrapper = shallow(<DropDown onChange={onChange} options={options} />);
  });

  it('should exist', () => {
    expect(dropdownWrapper).toBeTruthy();
    expect(dropdownWrapper.find('.styled-select').type()).toEqual('div');
  });
  it('should display dropdown component with values', () => {
    expect(dropdownWrapper.find('select')).toBeTruthy();
    expect(dropdownWrapper.find('option').at(0).text()).toEqual("Progress#1");
    expect(dropdownWrapper.find('option').at(1).text()).toEqual("Progress#2");
    expect(dropdownWrapper.find('option').at(2).text()).toEqual("Progress#3");
  });

  it('should be able click the dropdown ', () => {
    expect(dropdownWrapper.find('select').length).toBe(1);
    expect(dropdownWrapper).toMatchSnapshot();
    const wrapper = shallow(<DropDown onChange={onChange} options={options} />);
    wrapper.find('select').simulate('change',  "40");
    expect(onChange).toBeCalledWith("40");
  });

});