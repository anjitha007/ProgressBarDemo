import React from 'react';
import ButtonContainer from '../../app/components/ButtonContainer';
import Button from '../../app/components/Button';
import DropDown from '../../app/components/DropDown';

describe('ButtonContainer Component', () => {
  let wrapper;
  const onClick = jest.fn();
  const onChange = jest.fn();
  const buttons = [25,35, -10,40];
  const options = [25, 40]
  beforeEach(() => {
    wrapper = shallow(<ButtonContainer buttons={buttons}
      options={options}
      onClick={onClick}
      onChange={onChange} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('Button').length).toEqual(4);
    expect(wrapper.find('DropDown').length).toEqual(1);
  });

  it('should display button components with label', () => {
    expect(wrapper.find('Button').length).toEqual(4);
    expect(wrapper.find('Button').at(0).props().label).toEqual(25);
    expect(wrapper.find('Button').at(1).props().label).toEqual(35);
    expect(wrapper.find('Button').at(2).props().label).toEqual(-10);
    expect(wrapper.find('Button').at(3).props().label).toEqual(40);
  });

  it('should be able click the buttons inside container ', () => {
    wrapper.find('Button').at(0).simulate('click', "25");
    expect(onClick).toBeCalledWith("25");
    wrapper.find('Button').at(1).simulate('click', "35");
    expect(onClick).toBeCalledWith("35");
    wrapper.find('Button').at(2).simulate('click', "-10");
    expect(onClick).toBeCalledWith("-10");
    wrapper.find('Button').at(3).simulate('click', "40");
    expect(onClick).toBeCalledWith("40");
  });
  
  it('should display DropDown components with label', () => {
    expect(wrapper.find('DropDown').length).toEqual(1);
    expect(wrapper.find('DropDown').at(0).props().onChange).toEqual(onChange);
  });
  
  it('should be able select DropDown container ', () => {
    wrapper.find('DropDown').at(0).simulate('change', "25");
    expect(onChange).toBeCalledWith("25");
  });
  
});