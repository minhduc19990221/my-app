import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import './Component/custom.css'
import Homepage from './Component/Homepage'

function App() {
  // this.useScript("./assets/vendor/bootstrap/css/bootstrap.min.css");
  return (
    <div className="App">
        <Homepage/>
      {/* Browsing in ReactJS */}
    </div>
  );
}

function useScript(src) {
  const [ status, setStatus ] = useState(src ? "loading" : "idle");
}

export default App;
