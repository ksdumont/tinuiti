import React, {useState, useEffect} from 'react'
import './App.css';
import MyContext from './MyContext'
import Home from './components/Home'
import ProductPage from './components/ProductPage'
import { Route, Switch } from 'react-router-dom'

function App() {
  const [data, setData] = useState([])

  const fetchData = () => {
    fetch('data.json')
      .then(res => res.json())
      .then(jsonData => setData(jsonData))
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <MyContext.Provider value={data}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={ProductPage} />    
        </Switch>
    </MyContext.Provider>
  );
}

export default App;
