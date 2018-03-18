import React from 'react';
import App from '../../app/components/App';
import ButtonContainer from '../../app/components/ButtonContainer';
import ProgressBar from '../../app/components/ProgressBar';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('.container').type()).toEqual('div');
    expect(wrapper.exists(<ButtonContainer
     buttons={[2]} options={[3,3]} onChange={jest.fn()} onClick={jest.fn()} />)).toBe(true);
     expect(wrapper.exists( <ProgressBar progress={0} index={0} limit={100} />)).toBe(true);
  });
  
  it('should have one heading', () => {
    expect(wrapper.find('#heading').type()).toEqual('h2');
    expect(wrapper.find('#heading').text()).toEqual('ProgressBar Demo');
  });

});