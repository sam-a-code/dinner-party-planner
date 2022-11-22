import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from "react"
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("/hello")
    .then((r) => r.json())
    .then((data) => setCount(data.count))
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
