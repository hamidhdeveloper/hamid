import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/pages/home/Home';
import Loading from './components/loading/Loading';

function App() {
  
  const [showLoading, setshowLoading] = useState(true);

  useEffect(() => {
    // Simulate the loading process
    setTimeout(() => {
      setshowLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {showLoading ? (
        <Loading showLoading={showLoading} />
      ) : (
        // Your main content goes here
        <Home />
      )}
      
    </div>
  );
}

export default App;
