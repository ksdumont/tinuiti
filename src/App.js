import React, {useState, useEffect} from 'react'
import './App.css';
import MyContext from './MyContext'
import List from './components/List'

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
  
  console.log(data)
  
  return (
    <MyContext.Provider value={data}>
      <div className="container">
        <img className="tinuiti-logo" src="https://tinuiti.com/wp-content/uploads/2019/05/logo.svg" alt="Tinuiti"></img>
        <List />
      </div>
    </MyContext.Provider>
  );
}

export default App;
