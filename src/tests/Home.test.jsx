import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import jsonData from '../data.json';
import Home from '../components/Home';
import ProductContext from '../ProductContext';

Enzyme.configure({ adapter: new Adapter() });
const products = jsonData;
it('renders correctly', () => {
  const wrapper = mount(
    <ProductContext.Provider value={products}><Home /></ProductContext.Provider>
  );
  expect(wrapper.find('strong').text()).toBe(products[0].productName);
});
