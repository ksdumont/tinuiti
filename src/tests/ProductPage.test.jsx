import React from 'react';
import ReactDOM from 'react-dom';
import ProductPage from '../components/ProductPage';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const wrapper = shallow(<ProductPage />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
