import { useState } from 'react';
import './App.css';
import Reduser from './components/Reduser';
import User from './components/User';

function App() {

  let [data , setData] = useState([])

  let liftData = (obj) => {
    setData((prevState) => {
      return [...prevState , obj]
    })
}



  return (
    <div className="App">
      <Reduser save={liftData}/>
      <User expensess={data}/>
    </div>
  );
}

export default App;
