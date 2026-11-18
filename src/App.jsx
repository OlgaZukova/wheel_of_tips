import { useEffect, useState } from 'react';

import './App.css'

function App() {
const [tips, setTips] = useState("");

useEffect(() => {
fetchTips();
}, [])

const fetchTips = async () => {
const response = await fetch(`http://www.boredapi.com/api/activity/`);
const data = await response.json();
setTips(data.activity)
}



return (

<div className="App">
  <div className="tip-container">
    <p>{tips}</p>
    <button onClick={fetchTips}>New Tip</button>
  </div>
</div>

);

}

export default App;
