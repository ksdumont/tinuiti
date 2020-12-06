import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import jsonData from '../data.json';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const wrapper = shallow(<Card product={jsonData[0]} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
