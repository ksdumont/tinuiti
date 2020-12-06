import React from 'react';
import ReactDOM from 'react-dom';
import Chart from '../components/Chart';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const wrapper = shallow(<Chart />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
