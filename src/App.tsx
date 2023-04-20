import React from 'react';
import Button from './components/Button/Button';

const App: React.FC = () => {
  return (
    <div>
      <h1>UI Library Demo</h1>
      <Button onClick={() => alert('Button clicked!')}>Click me!</Button>
    </div>
  );
};

export default App;