import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home/';

function App() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getNames();
  }, [])

  const getNames = async () => {
    const response = await axios.get('http://localhost:3000/names');
    console.log(response.data);
    setUserName(response.data);
  }

  return (
    <>
      <Home/>
    </>
  )
}

export default App
