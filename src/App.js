import React from 'react';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div className="App">
      <h1>Dark Mode Toggle Example</h1>
      <ThemeToggle />
      <p>Click the button to toggle between Dark and Light modes.</p>
    </div>
  );
};

export default App;
