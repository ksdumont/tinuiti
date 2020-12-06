import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProductContext from './ProductContext';
import Home from './components/Home';
import ProductPage from './components/ProductPage';

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('data.json')
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={data}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductPage} />
      </Switch>
    </ProductContext.Provider>
  );
}

export default App;
